import { createSlice } from "@reduxjs/toolkit";

interface ModalState {
  modal: boolean;
}

const initialState: ModalState = {
  modal: false,
};

export const ModalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    modalFunc: (state) => {
      state.modal = !state.modal;
    },
  },
});

export const { modalFunc } = ModalSlice.actions;

export default ModalSlice.reducer;
