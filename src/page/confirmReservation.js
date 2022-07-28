import {
  ConfirmReservationWrap,
  ConfirmHeadWrap,
  ReservationTime,
  UserInfoWrap,
} from '../style/confirmReservationStyle';
import { useState } from 'react';
import CompNotification from '../components/compNotification';

function ConfirmReservation() {
  return (
    <div>
      <div className='leftPadding'>
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
            <CompNotification />
          </ConfirmReservationWrap>
        </div>
        <button className='normalBtn'>예약 확인</button>
      </div>
    </div>
  );
}

export default ConfirmReservation;
