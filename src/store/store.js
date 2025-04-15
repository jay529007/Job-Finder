import { configureStore, current } from "@reduxjs/toolkit";
import userReducer from "../features/userSlice";
import jobReducer from "../features/jobSlice";
import { loadState, saveState } from "./session";

const persistedState = loadState();

export const store = configureStore({
  reducer: {
    users: userReducer,
    jobs: jobReducer,
  },
  preloadedState: persistedState,
});

store.subscribe(() => {
  const state = store.getState();
  saveState({
    users: {
      login: state.users.login,
      currentUser: state.users.currentUser,
    },
  });
});
