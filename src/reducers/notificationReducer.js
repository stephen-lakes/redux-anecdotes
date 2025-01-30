import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  message: "",
  type: "",
  visible: false,
};

const notificationSlice = createSlice({
  name: "notification",
  initialState,
  reducers: {
    showNotification(state, action) {
      const { message, type } = action.payload;
      state.message = message;
      state.type = type;
      state.visible = true;
    },
    hideNotification(state) {
      state.message = "";
      state.type = "";
      state.visible = false;
    },
  },
});

// ecport the actinon creators
export const { showNotification, hideNotification } = notificationSlice.actions;

// expoet the reducer
export default notificationSlice.reducer;
