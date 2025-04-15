import { createSlice, createAsyncThunk, current } from "@reduxjs/toolkit";
import {
  getUsers,
  addUser as apiAddUser,
  updateUser as apiUpdateUser,
  deleteUser as apiDeleteUser,
} from "./userAPI";
import { loadState, saveState } from "../store/session";

// FETCH
export const fetchUsers = createAsyncThunk("users/fetchUsers", async () => {
  const data = await getUsers();
  return data;
});

// ADD
export const createUser = createAsyncThunk(
  "users/createUser",
  async (userData) => {
    const data = await apiAddUser(userData);
    return data;
  }
);

// UPDATE
export const editUser = createAsyncThunk(
  "users/updateUser",
  async ({ id, updatedData }) => {
    const data = await apiUpdateUser(id, updatedData);
    return data;
  }
);

// DELETE
export const removeUser = createAsyncThunk("users/deleteUser", async (id) => {
  await apiDeleteUser(id);
  return id;
});

const userSlice = createSlice({
  name: "users",
  initialState: {
    users: [],
    loading: false,
    // login: true,
    login: false,
    currentUser: null,
    // error: null,
  },
  reducers: {
    login: (state, action) => {
      state.login = true;
      state.currentUser = action.payload;
    },
    logout: (state, action) => {
      state.login = false;
      state.currentUser = null;
    },
  },

  extraReducers: (builder) => {
    builder
      // .addCase(fetchUsers.fulfilled, (state, action) => {
      //   state.users = action.payload;
      // })
      .addCase(fetchUsers.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.loading = false;
        state.users = action.payload;
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(createUser.fulfilled, (state, action) => {
        state.users.push(action.payload);
      })
      .addCase(editUser.fulfilled, (state, action) => {
        const index = state.users.findIndex((u) => u.id === action.payload.id);
        if (index !== -1) state.users[index] = action.payload;
      })
      .addCase(removeUser.fulfilled, (state, action) => {
        state.users = state.users.filter((u) => u.id !== action.payload);
      });
  },
});

export const { login, logout } = userSlice.actions;
export default userSlice.reducer;
