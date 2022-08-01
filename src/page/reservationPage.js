import CalendarComp from '../components/calendar';
import SelectTime from '../components/selectTime';
import SelectTicketCount from '../components/selctTicketCount';
import InfoCert from '../components/infoCert';
import Terms from '../components/terms';
import TermsDetail from '../components/termsDetail';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { saveReservaion } from '../redux/reservation/reservationInfo';
import { getAccessToken } from '../redux/token/accessToken';
import { invalidModalOpen, invalidModalClose } from '../redux/modal/modalOpen';

function ReservationPage() {
  const param = new URLSearchParams(window.location.search);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const getToken = useSelector(getAccessToken);
  const queryIdx = param.get('idx');
  const [token, setToken] = useState('');

  const [itemIdx, setItemIdx] = useState(null);
  const [ticketList, setTicketList] = useState([]);

  const checkRoute = (routeIdx) => {
    const numberIdx = Number(routeIdx);

    if (isNaN(numberIdx)) {
      dispatch(invalidModalOpen());
    } else {
      if (numberIdx > 6 || numberIdx < 0) {
        dispatch(invalidModalOpen());
      } else {
        dispatch(invalidModalClose());
      }
    }
  };

  useEffect(() => {
    checkRoute(queryIdx);
    checkReservation();
  });

  const [termsIdx, setTermsIdx] = useState(0);
  const [activeBtn, setActiveBtn] = useState(true);

  const [reservationInfo, setReservationInfo] = useState({
    ticketIdx: null,
    name: '',
    phone: '',
    countryCode: '82',
    authCode: '',
    ticketCount: 1,
    IsPersonalInfo: false,
    IsCreditInfo: false,
    IsSmsReceive: false,
  });

  const reservationClick = () => {
    dispatch(saveReservaion({ ...reservationInfo }));
    navigate('/reservationConfirm');
  };

  const checkReservation = () => {
    if (
      reservationInfo.ticketIdx !== null &&
      reservationInfo.name !== '' &&
      token !== '' &&
      reservationInfo.IsCreditInfo &&
      reservationInfo.IsPersonalInfo &&
      reservationInfo.IsSmsReceive
    ) {
      setActiveBtn(false);
    } else {
      setActiveBtn(true);
    }
  };

  return (
    <div>
      {termsIdx === 0 ? null : (
        <TermsDetail termsIdx={termsIdx} setTermsIdx={setTermsIdx} />
      )}
      <div>
        <CalendarComp
          setReservationInfo={setReservationInfo}
          reservationInfo={reservationInfo}
          queryIdx={queryIdx}
          setTicketList={setTicketList}
          setItemIdx={setItemIdx}
        />
        {itemIdx === null ? null : (
          <SelectTime
            setReservationInfo={setReservationInfo}
            reservationInfo={reservationInfo}
            ticketList={ticketList}
            queryIdx={queryIdx}
          />
        )}

        <SelectTicketCount
          setReservationInfo={setReservationInfo}
          reservationInfo={reservationInfo}
        />

        {itemIdx === null ? null : (
          <div className='leftPadding'>
            <InfoCert
              setReservationInfo={setReservationInfo}
              reservationInfo={reservationInfo}
              setToken={setToken}
            />
            <Terms
              setTermsIdx={setTermsIdx}
              setReservationInfo={setReservationInfo}
              reservationInfo={reservationInfo}
            />
            <button
              className={activeBtn ? 'normalBtn' : 'activeBtn'}
              onClick={reservationClick}
              disabled={activeBtn}
            >
              예약하기
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default ReservationPage;
