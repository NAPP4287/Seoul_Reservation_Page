import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  ticketIdx: null,
  userIdx: 19,
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
      state.userIdx = action.payload.userIdx;
      state.name = action.payload.name;
      state.phone = action.payload.phone;
      state.countryCode = action.payload.countryCode;
      state.authCode = action.payload.authCode;
      state.ticketCount = action.payload.ticketCount;
      state.IsPersonalInfo = action.payload.IsPersonalInfo;
      state.IsCreditInfo = action.payload.IsCreditInfo;
      state.IsSmsReceive = action.payload.IsSmsReceive;
    },
    removeReservation: (state, action) => {
      state.ticketIdx = '';
      state.userIdx = 0;
      state.name = '';
      state.phone = '';
      state.countryCode = '';
      state.authCode = '';
      state.ticketCount = '';
      state.IsPersonalInfo = '';
      state.IsCreditInfo = '';
      state.IsSmsReceive = '';
    },
  },
});

export const { saveReservaion, removeReservation } =
  reservationInfoSlice.actions;
export const getReservation = (state) => state.saveReservation;
export default reservationInfoSlice.reducer;
