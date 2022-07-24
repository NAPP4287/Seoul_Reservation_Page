import './App.css';
import LandingPage from './page/landing';
import ProList from './page/proList';
import CheckReservation from './page/checkReservation';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<LandingPage />} />
          <Route path='/programList' element={<ProList />} />
          <Route path='/checkReservation' element={<CheckReservation />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
