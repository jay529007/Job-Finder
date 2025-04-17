import { configureStore, current } from "@reduxjs/toolkit";
import userReducer from "../features/userSlice";
import jobReducer from "../features/jobSlice";

export const store = configureStore({
  reducer: {
    users: userReducer,
    jobs: jobReducer,
  },
});