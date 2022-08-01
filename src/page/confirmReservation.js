import {
  ConfirmReservationWrap,
  ConfirmHeadWrap,
  ReservationTime,
  UserInfoWrap,
} from '../style/confirmReservationStyle';
import { useState } from 'react';
import CompNotification from '../components/compNotification';
import { useSelector, useDispatch } from 'react-redux';
import { saveCompleteInfo } from '../redux/reservation/completeReservation';
import { getEctInfo } from '../redux/reservation/reservationEct';
import { customAxios } from '../axios/custromAxios';
import { useNavigate } from 'react-router';
import CompReservationInfo from '../components/comReservationInfo';

function ConfirmReservation() {
  const confirmRes = useSelector((state) => state.saveReservation);
  const ectInfo = useSelector(getEctInfo);
  const dispatch = useDispatch();
  const [checkNoti, setCheckNoti] = useState(true);
  const navigate = useNavigate();

  const onClickReservation = () => {
    console.log(typeof confirmRes.countryCode);
    customAxios
      .post('/reservation/create', confirmRes)
      .then((r) => {
        console.log(r.data);
        dispatch(saveCompleteInfo({ ...r.data }));
        navigate('/checkReservation/complete');
      })
      .catch((e) => console.log(e));
  };

  return (
    <div>
      <div className='leftPadding'>
        <div className='contentWrap'>
          <ConfirmReservationWrap>
            <ConfirmHeadWrap>
              <div className='confirmHead'>
                신청하신 예약 내용을 확인해주세요
              </div>
              {/* <div className='reservationNum'>
                예약번호 (고유) 날짜 영문자 조합
              </div> */}
            </ConfirmHeadWrap>
            <ReservationTime>
              <div className='date'>
                2022.{ectInfo.month}.{ectInfo.date}({ectInfo.week}){' '}
                {ectInfo.time}
              </div>
              <div className='dateBottom'>
                <div>예약인원 (수량)</div>
                <div>
                  {confirmRes.ticketCount}인/
                  {ectInfo.price === 0 ? '무료' : ectInfo.price}
                </div>
              </div>
            </ReservationTime>

            <UserInfoWrap>
              <div className='reservationTitleWrap'>
                <div className='headTitle'>예약자 정보</div>
              </div>
              <ul>
                <li>
                  <div className='type'>예약 유형</div>
                  <p>{ectInfo.resType}</p>
                </li>

                <li>
                  <div className='type'>예약자</div>
                  <p>{confirmRes.name}</p>
                </li>

                <li>
                  <div className='type'>핸드폰 번호</div>
                  <p>
                    <span>+{confirmRes.countryCode}</span>
                    {confirmRes.phone}
                  </p>
                </li>
              </ul>
            </UserInfoWrap>
            <CompNotification setCheckNoti={setCheckNoti} />
          </ConfirmReservationWrap>
        </div>
        <button
          className={checkNoti ? 'normalBtn' : 'activeBtn'}
          disabled={checkNoti}
          onClick={onClickReservation}
        >
          예약 확인
        </button>
      </div>
    </div>
  );
}

export default ConfirmReservation;
