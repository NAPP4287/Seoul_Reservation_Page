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
import { filterLanguage } from '../common/filterLanguage';

function ConfirmReservation({ langType }) {
  const confirmRes = useSelector((state) => state.saveReservation);
  const ectInfo = useSelector(getEctInfo);
  const dispatch = useDispatch();
  const [checkNoti, setCheckNoti] = useState(true);
  const navigate = useNavigate();
  const noneCheck = false;

  const onClickReservation = () => {
    console.log(typeof confirmRes);
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
                {filterLanguage('checkResTitle', langType)}
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
                <div>{filterLanguage('personCount', langType)}</div>
                <div>
                  {confirmRes.ticketCount}
                  {filterLanguage('person', langType)}/
                  {ectInfo.price === 0
                    ? filterLanguage('price', langType)
                    : ectInfo.price}
                </div>
              </div>
            </ReservationTime>

            <UserInfoWrap>
              <div className='reservationTitleWrap'>
                <div className='headTitle'>
                  {filterLanguage('userInfo', langType)}
                </div>
              </div>
              <ul>
                <li>
                  <div className='type'>
                    {filterLanguage('reservationType', langType)}
                  </div>
                  <p>{ectInfo.resType}</p>
                </li>

                <li>
                  <div className='type'>
                    {filterLanguage('userTitle', langType)}
                  </div>
                  <p>{confirmRes.name}</p>
                </li>

                <li>
                  <div className='type'>
                    {filterLanguage('phone', langType)}
                  </div>
                  <p>
                    <span>+{confirmRes.countryCode}</span>
                    {confirmRes.phone}
                  </p>
                </li>
              </ul>
            </UserInfoWrap>
            <CompNotification
              setCheckNoti={setCheckNoti}
              langType={langType}
              noneCheck={noneCheck}
            />
          </ConfirmReservationWrap>
        </div>
        <div className='btnWrap'>
          <button
            className={checkNoti ? 'normalBtn' : 'activeBtn'}
            disabled={checkNoti}
            onClick={onClickReservation}
          >
            {filterLanguage('completeReservationBtn', langType)}
          </button>
        </div>
      </div>
    </div>
  );
}

export default ConfirmReservation;
