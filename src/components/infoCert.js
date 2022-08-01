import ReservationInfoComp from './reservationInfoComp';
import { useState } from 'react';

function InfoCert({ setReservationInfo, reservationInfo, setToken }) {
  const [certConfirm, setCertConfirm] = useState(false);
  const [showOptionBox, setShowOptionBox] = useState(false);
  const [showCountryCode, setShowCountryCode] = useState(false);
  const reservationPage = true;

  return (
    <div className='contentWrap'>
      <div className='reservationTitleWrap'>
        <div className='headTitle'>예약자 정보 및 본인 인증</div>
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
        />
      </div>
    </div>
  );
}

export default InfoCert;
