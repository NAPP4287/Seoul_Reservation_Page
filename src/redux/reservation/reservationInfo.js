import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  month: '',
  date: '',
  time: '',
  personCount: 1,
  userName: '',
  userPhoneNum: '',
  typeSelect: '',
  completeCert: false,
  termsAll: false,
};

export const reservationInfoSlice = createSlice({
  name: 'reservationInfo',
  initialState,
  reducers: {
    saveReservation: (state, action) => {
      state = action.payload;
      console.log(state);
    },
  },
});

export const { saveReservation } = reservationInfoSlice.actions;
export const reservation = (state) => state.saveReservation;
export default reservationInfoSlice.reducer;
