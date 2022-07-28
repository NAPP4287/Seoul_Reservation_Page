import './App.css';
import LandingPage from './page/landing';
import ProList from './page/proList';
import CheckReservation from './page/checkReservation';
import ReservationPage from './page/reservationPage';
import ConfirmReservation from './page/confirmReservation';
import InvalidModal from './modal/invalidModal';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { modalInfo } from './redux/modal/modalOpen';

function App() {
  const { invalidOpen } = useSelector(modalInfo);

  return (
    <div className='App'>
      {invalidOpen ? <InvalidModal /> : null}
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<LandingPage />} />
          <Route path='/programList' element={<ProList />} />
          <Route path='/checkReservation' element={<CheckReservation />} />
          <Route
            path='/programList/reservation'
            element={<ReservationPage />}
          />
          <Route path='/reservationConfirm' element={<ConfirmReservation />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
