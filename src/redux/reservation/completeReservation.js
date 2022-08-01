import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  langType: '',
  reservationCode: '',
  title: '',
  userName: '',
  userPhone: '',
  countryCode: '',
  ticketCount: 0,
  price: null,
  writeDate: '',
  Authorization: 'JWT 토큰, 유저가 예약 취소할때 필요함',
};

export const completeReservationSlice = createSlice({
  name: 'reservationEct',
  initialState,
  reducers: {
    saveCompleteInfo: (state, action) => {
      state.langType = action.payload.langType;
      state.reservationCode = action.payload.reservationCode;
      state.title = action.payload.title;
      state.userName = action.payload.userName;
      state.userPhone = action.payload.userPhone;
      state.countryCode = action.payload.countryCode;
      state.ticketCount = action.payload.ticketCount;
      state.price = action.payload.price;
      state.writeDate = action.payload.writeDate;
      state.Authorization = action.payload.Authorization;
    },
  },
});

export const { saveCompleteInfo } = completeReservationSlice.actions;
export const getCompleteInfo = (state) => state.saveCompleteInfo;
export default completeReservationSlice.reducer;
