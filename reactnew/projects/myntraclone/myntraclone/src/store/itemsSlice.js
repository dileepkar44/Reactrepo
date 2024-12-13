import { createSlice } from "@reduxjs/toolkit";

export const itemSlice = createSlice({
  name: "items",
  initialState: [],
  reducers: {
    addInitialItems: (state, action) => {
      return action.payload;
    },
  },
});

export const itemsActions = itemSlice.actions;
