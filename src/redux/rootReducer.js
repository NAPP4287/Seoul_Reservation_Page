import { combineReducers } from 'redux';
import reservationInfoReducer from './reservation/reservationInfo';
import modalOpenReducer from './modal/modalOpen';
import languageReducer from './langSelect/language';
import accessTokenReducer from './token/accessToken';

const reducer = combineReducers({
  saveReservation: reservationInfoReducer,
  modalOpen: modalOpenReducer,
  selectLanguage: languageReducer,
  accessToken: accessTokenReducer,
});

export default reducer;
