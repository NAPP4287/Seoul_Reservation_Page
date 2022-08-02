import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  invalidOpen: false,
  certCompletOpen: false,
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
    certCompleteModalOpen: (state, action) => {
      state.certCompletOpen = true;
    },
    certCompleteModalClose: (state, action) => {
      state.certCompletOpen = false;
    },
  },
});

export const {
  invalidModalOpen,
  invalidModalClose,
  certCompleteModalOpen,
  certCompleteModalClose,
} = modalOpenSlice.actions;
export const modalInfo = (state) => state.modalOpen;
export default modalOpenSlice.reducer;
