import { ChkResWrap, ChkTitleWrap } from '../style/checkReservationStyle';
import { useState, useRef } from 'react';
import ReservationInfoComp from '../components/reservationInfoComp';

function CheckReservation() {
  const [certConfirm, setCertConfirm] = useState(false);
  const [showOptionBox, setShowOptionBox] = useState(false);
  const [showCountryCode, setShowCountryCode] = useState(false);
  const outSection = useRef();

  return (
    <div>
      <ChkResWrap
        className='contentWrap'
        ref={outSection}
        onClick={(e) => {
          if (outSection.current === e.target) {
            setShowOptionBox(false);
            setShowCountryCode(false);
          }
        }}
      >
        <ChkTitleWrap ref={outSection}>
          <h3>예약 조회</h3>
        </ChkTitleWrap>

        <ReservationInfoComp
          certConfirm={certConfirm}
          setCertConfirm={setCertConfirm}
          showOptionBox={showOptionBox}
          setShowOptionBox={setShowOptionBox}
          showCountryCode={showCountryCode}
          setShowCountryCode={setShowCountryCode}
        />

        <button style={{ color: '#C5C5C5' }}>조회하기</button>
      </ChkResWrap>
    </div>
  );
}

export default CheckReservation;
