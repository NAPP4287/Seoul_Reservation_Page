import ReservationInfoComp from './reservationInfoComp';
import { useState } from 'react';
import { filterLanguage } from '../common/filterLanguage';

function InfoCert({ setReservationInfo, reservationInfo, setToken, langType }) {
  const [certConfirm, setCertConfirm] = useState(false);
  const [showOptionBox, setShowOptionBox] = useState(false);
  const [showCountryCode, setShowCountryCode] = useState(false);
  const reservationPage = true;

  return (
    <div className='contentWrap'>
      <div className='reservationTitleWrap'>
        <div className='headTitle'>
          {filterLanguage('contactDetail', langType)}
        </div>
      </div>

      <div style={{ padding: '20px 0 20px 0' }}>
        <ReservationInfoComp
          certConfirm={certConfirm}
          setCertConfirm={setCertConfirm}
          showOptionBox={showOptionBox}
          setShowOptionBox={setShowOptionBox}
          showCountryCode={showCountryCode}
          setShowCountryCode={setShowCountryCode}
          reservationPage={reservationPage}
          setReservationInfo={setReservationInfo}
          reservationInfo={reservationInfo}
          setToken={setToken}
          langType={langType}
        />
      </div>
    </div>
  );
}

export default InfoCert;
