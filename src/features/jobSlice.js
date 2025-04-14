import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  getJobs,
  addJobs as apiAddJobs,
  updateJobs as apiUpdateJobs,
  deleteJobs as apiDeleteJobs,
} from "./jobAPI";
import { act } from "react";

//FETCH
export const fetchJobs = createAsyncThunk("jobs/fetchJobs", async (isHome) => {
  const data = await getJobs(isHome);
  return data;
});

//ADD
export const createJob = createAsyncThunk("jobs/createJob", async (jobData) => {
  const data = await apiAddJobs(jobData);
  return data;
});

//UPDATE
export const updateJob = createAsyncThunk(
  "jobs/updateJob",
  async ({ id, updatedData }) => {
    const data = await apiUpdateJobs(id, updatedData);
    return data;
  }
);

//DELETE
export const deleteJob = createAsyncThunk("jobs/deleteJob", async ({ id }) => {
  await apiDeleteJobs(id);
  return id;
});

const jobSlice = createSlice({
  name: "jobs",
  initialState: {
    jobs: [],
    loading: false,
    error: null,
  },
  reducers: {},

  extraReducers: (builder) => {
    builder
      //FETCH
      .addCase(fetchJobs.fulfilled, (state, action) => {
        state.loading = false;
        state.jobs = action.payload;
      })
      .addCase(fetchJobs.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchJobs.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      //ADD
      .addCase(createJob.fulfilled, (state, action) => {
        state.jobs.push(action.payload);
      })
      //UPDATE
      .addCase(updateJob.fulfilled, (state, action) => {
        const index = state.jobs.findIndex((e) => e.id === action.payload.id);
        if (index !== -1) state.jobs[index] = action.payload;
      })
      //DELETE
      .addCase(deleteJob.fulfilled, (state, action) => {
        state.jobs = state.jobs.filter((e) => e.id !== action.payload);
      });
  },
});

export default jobSlice.reducer;
