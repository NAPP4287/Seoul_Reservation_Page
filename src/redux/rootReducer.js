import { combineReducers } from 'redux';
import reservationInfoReducer from './reservation/reservationInfo';
import modalOpenReducer from './modal/modalOpen';
import languageReducer from './langSelect/language';
import accessTokenReducer from './token/accessToken';
import reservationEctInfoReducer from './reservation/reservationEct';
import completeReservationInfoReducer from './reservation/completeReservation';

const reducer = combineReducers({
  saveReservation: reservationInfoReducer,
  modalOpen: modalOpenReducer,
  selectLanguage: languageReducer,
  accessToken: accessTokenReducer,
  saveEctInfo: reservationEctInfoReducer,
  saveCompleteInfo: completeReservationInfoReducer,
});

export default reducer;
