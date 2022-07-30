import { combineReducers } from 'redux';
import reservationInfoReducer from './reservation/reservationInfo';
import modalOpenReducer from './modal/modalOpen';
import languageReducer from './langSelect/language';

const reducer = combineReducers({
  saveReservation: reservationInfoReducer,
  modalOpen: modalOpenReducer,
  selectLanguage: languageReducer,
});

export default reducer;
