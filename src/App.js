import './App.css';
import LandingPage from './page/landing';
import ProList from './page/proList';
import CheckReservation from './page/checkReservation';
import ReservationPage from './page/reservationPage';
import CheckReservationList from './page/checkReservationList';
import ConfirmReservation from './page/confirmReservation';
import InvalidModal from './modal/invalidModal';
import EditReservation from './page/editReservation';
import CompleteReservation from './page/completeReservation';
import CancelReservation from './page/cancelReservation';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { modalInfo } from './redux/modal/modalOpen';
import BackNav from './components/backNav';

function App() {
  const { invalidOpen } = useSelector(modalInfo);

  return (
    <div className='App'>
      {invalidOpen ? <InvalidModal /> : null}
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<LandingPage />} />
          <Route
            path='/programList'
            element={
              <div>
                <BackNav />
                <ProList />
              </div>
            }
          />
          <Route
            path='/checkReservation'
            element={
              <div>
                <BackNav />
                <CheckReservation />
              </div>
            }
          />
          <Route
            path='/checkReservation/complete'
            element={
              <div>
                <BackNav />
                <CompleteReservation />
              </div>
            }
          />
          <Route
            path='/checkReservation/reservationList'
            element={
              <div>
                <BackNav />
                <CheckReservationList />
              </div>
            }
          />
          <Route
            path='/checkReservation/reservationList/edit'
            element={
              <div>
                <BackNav />
                <EditReservation />
              </div>
            }
          />
          <Route
            path='/checkReservation/reservationList/edit/cancel'
            element={
              <div>
                <BackNav />
                <CancelReservation />
              </div>
            }
          />
          <Route
            path='/programList/reservation'
            element={
              <div>
                <BackNav />
                <ReservationPage />
              </div>
            }
          />
          <Route
            path='/reservationConfirm'
            element={
              <div>
                <BackNav />
                <ConfirmReservation />
              </div>
            }
          />
          <Route
            path='/reservationConfirm/complete'
            element={
              <div>
                <BackNav />
                <CompleteReservation />
              </div>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
