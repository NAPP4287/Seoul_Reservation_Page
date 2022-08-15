import { ChkResWrap, ChkTitleWrap } from '../style/checkReservationStyle';
import { useState, useRef } from 'react';
import ReservationInfoComp from '../components/reservationInfoComp';
import { useEffect } from 'react';
import { setCookie } from '../axios/cookie';
import { saveToken } from '../redux/token/accessToken';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import { filterLanguage } from '../common/filterLanguage';

function CheckReservation({ langType }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [certConfirm, setCertConfirm] = useState(false);
  const [showOptionBox, setShowOptionBox] = useState(false);
  const [showCountryCode, setShowCountryCode] = useState(false);
  const [reservationInfo, setReservationInfo] = useState({
    name: '',
    phone: '',
    countryCode: '82',
    authCode: '',
  });
  const [activeBtn, setActiveBtn] = useState(false);
  const [token, setToken] = useState('');

  const outSection = useRef();
  const reservationPage = true;

  useEffect(() => {
    if (reservationInfo.name !== '' && token !== '') {
      setActiveBtn(false);
    } else {
      setActiveBtn(true);
    }
  });

  const goReservationList = () => {
    console.log(token);
    navigate('/checkReservation/reservationList');
    window.location.reload();
  };

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
          <h3>{filterLanguage('checkTitle', langType)}</h3>
        </ChkTitleWrap>

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

        <button
          className={activeBtn ? 'normalBtn' : 'activeBtn'}
          onClick={goReservationList}
          disabled={activeBtn}
        >
          {filterLanguage('check', langType)}
        </button>
      </ChkResWrap>
    </div>
  );
}

export default CheckReservation;
