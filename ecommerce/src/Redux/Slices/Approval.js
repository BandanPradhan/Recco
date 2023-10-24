// approvalSlice.js
import { createSlice } from "@reduxjs/toolkit";

const approvalSlice = createSlice({
  name: "approval",
  initialState: {
    status: "pending",
    modalValue: "missing",
  },
  reducers: {
    setApproved: (state) => {
      state.status = "approved";
    },
    setCancelled: (state) => {
      state.status = "cancelled";
    },
    setModalValue: (state, action) => {
      state.modalValue = action.payload;
    },
  },
});

export const { setApproved, setCancelled, setModalValue } =
  approvalSlice.actions;

export default approvalSlice.reducer;
