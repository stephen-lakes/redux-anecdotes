import { createSlice } from "@reduxjs/toolkit";

const initialState = "";

const notificationSlice = createSlice({
  name: "notification",
  initialState,
  reducers: {
    showNotification(state, action) {
      return action.payload;
    },
    hideNotification(state, action) {
      return action.payload;
    },
  },
});

// ecport the actinon creators
export const { showNotification, hideNotification } = notificationSlice.actions;

// expoet the reducer
export default notificationSlice.reducer;
