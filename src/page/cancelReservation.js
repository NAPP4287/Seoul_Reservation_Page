import {
  CompWrap,
  ReservationBox,
  PersonCountWrap,
  UserInfoWrap,
} from '../style/compReservationInfoStyle';
import { getCompleteInfo } from '../redux/reservation/completeReservation';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router';

function CancelReservation() {
  const navigate = useNavigate();

  const reservationInfo = useSelector(getCompleteInfo);
  const goLanding = () => {
    navigate('/');
  };

  return (
    <div>
      <div className='contentWrap leftPadding'>
        <CompWrap>
          <div className='titleWrap'>
            <div className='confirmHead'>예약이 취소됐습니다</div>
            <div className='reservationNum'>
              {reservationInfo.reservationCode}
            </div>
          </div>

          <ReservationBox>
            <div className='headTitle'>2022.7.23(토) 오후 12:00</div>
            <PersonCountWrap>
              <div>예약인원 (수량)</div>
              <div>
                {reservationInfo.ticketCount}인/
                {reservationInfo.price === 0 ? '무료' : reservationInfo.price}
              </div>
            </PersonCountWrap>

            <UserInfoWrap>
              <div className='reservationTitleWrap'>
                <div className='headTitle'>예약자 정보</div>
              </div>

              <ul>
                <li>
                  <div className='type'>예약 유형</div>
                  <p>{reservationInfo.title}</p>
                </li>

                <li>
                  <div className='type'>예약자</div>
                  <p>{reservationInfo.userName}</p>
                </li>

                <li>
                  <div className='type'>핸드폰 번호</div>
                  <p>
                    <span>+{reservationInfo.countryCode}</span>
                    {reservationInfo.userPhone}
                  </p>
                </li>
              </ul>
            </UserInfoWrap>
          </ReservationBox>
        </CompWrap>
      </div>
      <button className='activeBtn' onClick={goLanding}>
        확인
      </button>
    </div>
  );
}

export default CancelReservation;
