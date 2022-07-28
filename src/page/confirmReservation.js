import BackNav from '../components/backNav';
import {
  ConfirmReservationWrap,
  ConfirmHeadWrap,
  ReservationTime,
  UserInfoWrap,
  NotificationWrap,
  NotificationCheck,
} from '../style/confirmReservationStyle';
import { useState } from 'react';
import NotificationDetail from '../components/notificationDetail';

function ConfirmReservation() {
  const [showDetail, setShowDetail] = useState(false);

  return (
    <div>
      {showDetail ? (
        <NotificationDetail setShowDetail={setShowDetail} />
      ) : (
        <div className='leftPadding'>
          <BackNav />
          <div className='contentWrap'>
            <ConfirmReservationWrap>
              <ConfirmHeadWrap>
                <div className='confirmHead'>
                  신청하신 예약 내용을 확인해주세요
                </div>
                <div className='reservationNum'>
                  예약번호 (고유) 날짜 영문자 조합
                </div>
              </ConfirmHeadWrap>
              <ReservationTime>
                <div className='date'>2022.7.23(토) 오후 12:00</div>
                <div className='dateBottom'>
                  <div>예약인원 (수량)</div>
                  <div>2인/무료</div>
                </div>
              </ReservationTime>

              <UserInfoWrap>
                <div className='reservationTitleWrap'>
                  <div className='headTitle'>예약자 정보</div>
                </div>
                <ul>
                  <li>
                    <div className='type'>예약 유형</div>
                    <p>서울 뷰티 하우스</p>
                  </li>

                  <li>
                    <div className='type'>예약자</div>
                    <p>홍길동</p>
                  </li>

                  <li>
                    <div className='type'>핸드폰 번호</div>
                    <p>
                      <span>+82</span>01012345678
                    </p>
                  </li>
                </ul>
              </UserInfoWrap>
              <NotificationWrap>
                <div className='reservationTitleWrap'>
                  <div className='headTitle'>주의사항 및 안내사항</div>
                </div>
                <NotificationCheck>
                  <li>
                    <input name='one' type={'checkbox'} />
                    <label onClick={() => setShowDetail(true)}>
                      주의사항 및 안내사항 확인
                    </label>
                  </li>
                </NotificationCheck>
              </NotificationWrap>
            </ConfirmReservationWrap>
          </div>
          <button className='normalBtn'>예약 확인</button>
        </div>
      )}
    </div>
  );
}

export default ConfirmReservation;
