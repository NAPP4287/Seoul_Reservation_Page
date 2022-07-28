import { combineReducers } from 'redux';
import reservationInfoReducer from './reservation/reservationInfo';
import modalOpenReducer from './modal/modalOpen';

const reducer = combineReducers({
  saveReservation: reservationInfoReducer,
  modalOpen: modalOpenReducer,
});

export default reducer;
