import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  langType: 'ko',
};

export const languageSlice = createSlice({
  name: 'language',
  initialState,
  reducers: {
    selectLanguage: (state, action) => {
      state.langType = action.payload;
    },
  },
});

export const { selectLanguage } = languageSlice.actions;
export const languageSelect = (state) => state.selectLanguage;
export default languageSlice.reducer;
