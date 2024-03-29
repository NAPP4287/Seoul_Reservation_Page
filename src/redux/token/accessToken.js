import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  accessToken: '',
};

export const accessTokenSlice = createSlice({
  name: 'accessToken',
  initialState,
  reducers: {
    saveToken: (state, action) => {
      state.accessToken = action.payload;
    },
    removeToken: (state, action) => {
      state.accessToken = '';
    },
  },
});

export const { saveToken, removeToken } = accessTokenSlice.actions;
export const getAccessToken = (state) => state.accessToken;
export default accessTokenSlice.reducer;
