import {
  CompWrap,
  ReservationBox,
  PersonCountWrap,
  UserInfoWrap,
} from '../style/compReservationInfoStyle';

function CompReservationInfo() {
  return (
    <CompWrap>
      <div className='titleWrap'>
        <div className='confirmHead'>예약이 완료됐습니다</div>
        <div className='reservationNum'>예약번호 (고유) 날짜 영문자 조합</div>
      </div>

      <ReservationBox>
        <div className='headTitle'>2022.7.23(토) 오후 12:00</div>
        <PersonCountWrap>
          <div>예약인원 (수량)</div>
          <div>2인/무료</div>
        </PersonCountWrap>

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
      </ReservationBox>
    </CompWrap>
  );
}

export default CompReservationInfo;
