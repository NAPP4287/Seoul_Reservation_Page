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
    saveReservaion: (state, action) => {
      state.ticketIdx = action.payload.ticketIdx;
      state.name = action.payload.name;
      state.phone = action.payload.phone;
      state.countryCode = action.payload.countryCode;
      state.authCode = action.payload.authCode;
      state.ticketCount = action.payload.ticketCount;
      state.IsPersonalInfo = action.payload.IsPersonalInfo;
      state.IsCreditInfo = action.payload.IsCreditInfo;
      state.IsSmsReceive = action.payload.IsSmsReceive;
    },
  },
});

export const { saveReservaion } = reservationInfoSlice.actions;
export const getReservation = (state) => state.saveReservaion;
export default reservationInfoSlice.reducer;
