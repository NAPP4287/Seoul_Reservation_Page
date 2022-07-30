import CalendarComp from '../components/calendar';
import SelectTime from '../components/selectTime';
import SelectTicketCount from '../components/selctTicketCount';
import InfoCert from '../components/infoCert';
import Terms from '../components/terms';
import TermsDetail from '../components/termsDetail';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { saveReservation } from '../redux/reservation/reservationInfo';
import { invalidModalOpen, invalidModalClose } from '../redux/modal/modalOpen';

function ReservationPage() {
  const param = new URLSearchParams(window.location.search);
  const dispatch = useDispatch();
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
  }, [queryIdx]);

  const [termsIdx, setTermsIdx] = useState(0);

  const [reservationInfo, setReservationInfo] = useState({
    month: '',
    date: '',
    time: '',
    personCount: 1,
    userName: '',
    userPhoneNum: '',
    completeCert: false,
    termsAll: false,
  });

  const reservationClick = () => {
    dispatch(saveReservation(reservationInfo));
  };

  // 날짜, 시간, 인원 수량, 예약자 성명, 핸드폰 번호, 인증확인 여부, 약관동의 전체 동의 여부

  return (
    <div>
      {termsIdx === 0 ? (
        <div>
          <CalendarComp
            setReservationInfo={setReservationInfo}
            reservationInfo={reservationInfo}
            queryIdx={queryIdx}
          />
          {reservationInfo.month !== '' && reservationInfo.date !== '' ? (
            <SelectTime
              setReservationInfo={setReservationInfo}
              reservationInfo={reservationInfo}
            />
          ) : null}

          <SelectTicketCount
            setReservationInfo={setReservationInfo}
            reservationInfo={reservationInfo}
          />

          {reservationInfo.time === '' ? null : (
            <div className='leftPadding'>
              <InfoCert />
              <Terms
                setTermsIdx={setTermsIdx}
                setReservationInfo={setReservationInfo}
                reservationInfo={reservationInfo}
              />
              {/* <Link to='/' onClick={(e) => e.preventDefault()}>
                <button className='normalBtn' disabled>
                  예약하기
                </button>
              </Link> */}
              <Link to={`/reservationConfirm`}>
                <button className='normalBtn' onClick={reservationClick}>
                  예약하기
                </button>
              </Link>
            </div>
          )}
        </div>
      ) : (
        <TermsDetail termsIdx={termsIdx} setTermsIdx={setTermsIdx} />
      )}
    </div>
  );
}

export default ReservationPage;
