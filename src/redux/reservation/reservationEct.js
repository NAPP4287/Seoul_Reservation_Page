import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  month: '',
  date: '',
  time: '',
  selectWeek: '',
  resType: '',
  price: null,
};

export const reservationEctSlice = createSlice({
  name: 'reservationEct',
  initialState,
  reducers: {
    saveEctInfo: (state, action) => {
      state.month = action.payload.month;
      state.date = action.payload.date;
      state.week = action.payload.week;
      state.resType = action.payload.resType;
      state.price = action.payload.price;
      state.time = action.payload.time;
    },
  },
});

export const { saveEctInfo } = reservationEctSlice.actions;
export const getEctInfo = (state) => state.saveEctInfo;
export default reservationEctSlice.reducer;
