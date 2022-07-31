import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  accessToken: '',
};

export const accessTokenSlice = createSlice({
  name: 'reservationInfo',
  initialState,
  reducers: {
    saveToken: (state, action) => {
      state = action.payload;
      console.log(state);
    },
  },
});

export const { saveToken } = accessTokenSlice.actions;
export const accessToken = (state) => state.saveToken;
export default accessTokenSlice.reducer;
