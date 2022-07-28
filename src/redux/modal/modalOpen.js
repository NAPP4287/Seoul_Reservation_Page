import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  invalidOpen: false,
};

export const modalOpenSlice = createSlice({
  name: 'invalidModal',
  initialState,
  reducers: {
    invalidModalOpen: (state, action) => {
      state.invalidOpen = true;
    },
    invalidModalClose: (state, action) => {
      state.invalidOpen = false;
    },
  },
});

export const { invalidModalOpen, invalidModalClose } = modalOpenSlice.actions;
export const modalInfo = (state) => state.modalOpen;
export default modalOpenSlice.reducer;
