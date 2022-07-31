import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  ticketIdx: null,
  name: '',
  phone: '',
  countryCode: '82',
  authCode: '',
  ticketCount: 1,
  IsPersonalInfo: false,
  IsCreditInfo: false,
  IsSmsReceive: false,
};

export const reservationInfoSlice = createSlice({
  name: 'reservationInfo',
  initialState,
  reducers: {
    saveReservation: (state, action) => {
      state = action.payload;
      console.log(action);
    },
  },
});

export const { saveReservation } = reservationInfoSlice.actions;
export const reservation = (state) => state.saveReservation;
export default reservationInfoSlice.reducer;
