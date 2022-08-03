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
import { languageSelect } from './redux/langSelect/language';
import BackNav from './components/backNav';
import Nav from './components/nav';
import CertCompleteModal from './modal/certCompleteModal';
import NavBackNone from './components/navBackNone';

function App() {
  const { invalidOpen, certCompletOpen } = useSelector(modalInfo);
  const { langType } = useSelector(languageSelect);

  return (
    <div className='App'>
      {invalidOpen ? <InvalidModal langType={langType} /> : null}
      {certCompletOpen ? <CertCompleteModal langType={langType} /> : null}

      <BrowserRouter>
        <Routes>
          <Route path='/' element={<LandingPage langType={langType} />} />
          <Route
            path='/programList'
            element={
              <div>
                <BackNav />
                <ProList langType={langType} />
              </div>
            }
          />
          <Route
            path='/checkReservation'
            element={
              <div>
                <BackNav />
                <CheckReservation langType={langType} />
              </div>
            }
          />
          <Route
            path='/checkReservation/complete'
            element={
              <div>
                <NavBackNone />
                <CompleteReservation langType={langType} />
              </div>
            }
          />
          <Route
            path='/checkReservation/reservationList'
            element={
              <div>
                <BackNav />
                <CheckReservationList langType={langType} />
              </div>
            }
          />
          <Route
            path='/checkReservation/reservationList/edit'
            element={
              <div>
                <BackNav />
                <EditReservation langType={langType} />
              </div>
            }
          />
          <Route
            path='/checkReservation/reservationList/edit/cancel'
            element={
              <div>
                <BackNav />
                <CancelReservation langType={langType} />
              </div>
            }
          />
          <Route
            path='/programList/reservation'
            element={
              <div>
                <BackNav />
                <ReservationPage langType={langType} />
              </div>
            }
          />
          <Route
            path='/reservationConfirm'
            element={
              <div>
                <BackNav />
                <ConfirmReservation langType={langType} />
              </div>
            }
          />
          <Route
            path='/reservationConfirm/complete'
            element={
              <div>
                <BackNav />
                <CompleteReservation langType={langType} />
              </div>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
