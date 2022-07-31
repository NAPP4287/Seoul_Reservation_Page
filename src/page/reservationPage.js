import CalendarComp from '../components/calendar';
import SelectTime from '../components/selectTime';
import SelectTicketCount from '../components/selctTicketCount';
import InfoCert from '../components/infoCert';
import Terms from '../components/terms';
import TermsDetail from '../components/termsDetail';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  saveReservation,
  reservation,
} from '../redux/reservation/reservationInfo';
import { getAccessToken } from '../redux/token/accessToken';
import { invalidModalOpen, invalidModalClose } from '../redux/modal/modalOpen';

function ReservationPage() {
  const param = new URLSearchParams(window.location.search);
  const dispatch = useDispatch();
  const getToken = useSelector(getAccessToken);
  const sendReservationData = useSelector(reservation);
  const queryIdx = param.get('idx');

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
    console.log('?');
    checkReservation();
  });

  const [termsIdx, setTermsIdx] = useState(0);
  const [activeBtn, setActiveBtn] = useState(true);

  const [reservationInfo, setReservationInfo] = useState({
    ticketIdx: null,
    name: '',
    phone: '',
    countryCode: 82,
    authCode: '',
    ticketCount: 1,
    IsPersonalInfo: false,
    IsCreditInfo: false,
    IsSmsReceive: false,
  });

  const [itemIdx, setItemIdx] = useState(null);
  const [isTermComplete, setIsTermComplete] = useState(false);

  const [ticketList, setTicketList] = useState([]);

  const reservationClick = () => {
    dispatch(saveReservation(reservationInfo));
  };

  const checkReservation = () => {
    console.log(getToken);
    if (
      reservationInfo.ticketIdx !== null &&
      reservation.name !== '' &&
      getToken.accessToken !== '' &&
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
              setIsTermComplete={setIsTermComplete}
            />
            <Terms
              setTermsIdx={setTermsIdx}
              setReservationInfo={setReservationInfo}
              reservationInfo={reservationInfo}
            />
            <Link to={`/reservationConfirm`}>
              <button
                className={activeBtn ? 'normalBtn' : 'activeBtn'}
                onClick={reservationClick}
                disabled={activeBtn}
              >
                예약하기
              </button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}

export default ReservationPage;
