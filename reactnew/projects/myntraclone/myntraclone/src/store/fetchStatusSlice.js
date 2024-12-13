import { createSlice } from "@reduxjs/toolkit";

export const fetchStatusSlice = createSlice({
  name: "fetchStatus",
  initialState: {
    fetchDone: false, //pending(false) or done(true)
    currentlytFetching: false,
  },
  reducers: {
    markFetchDone: (state) => {
      state.fetchDone = true;
    },
    markFetchingStarted: (state) => {
      state.currentlytFetching = true;
    },
    markFetchingFinished: (state) => {
      state.currentlytFetching = false;
    },
  },
});

export const fetchStatusActions = fetchStatusSlice.actions;
