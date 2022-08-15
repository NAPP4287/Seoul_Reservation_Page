import {
  ConfirmReservationWrap,
  ConfirmHeadWrap,
  ReservationTime,
  UserInfoWrap,
} from '../style/confirmReservationStyle';
import { useState, useEffect } from 'react';
import CompNotification from '../components/compNotification';
import { useSelector, useDispatch } from 'react-redux';
import { saveCompleteInfo } from '../redux/reservation/completeReservation';
import { getEctInfo } from '../redux/reservation/reservationEct';
import { customAxios } from '../axios/custromAxios';
import { useNavigate } from 'react-router';
import CompReservationInfo from '../components/comReservationInfo';
import { filterLanguage } from '../common/filterLanguage';
import Loading from './loading';
import { getAccessToken, removeToken } from '../redux/token/accessToken';
import InvalidModal from '../modal/invalidModal';
import { errorMsgList } from '../data/errorMsg';

function ConfirmReservation({ langType }) {
  const confirmRes = useSelector((state) => state.saveReservation);
  console.log(confirmRes);
  const token = useSelector(getAccessToken);
  const ectInfo = useSelector(getEctInfo);
  const dispatch = useDispatch();
  const [checkNoti, setCheckNoti] = useState(true);
  const [isValid, setIsValid] = useState(true);
  const [userIdx, setUserIdx] = useState(0);
  const navigate = useNavigate();
  const noneCheck = false;

  const param = new URLSearchParams(window.location.search);
  const queryIdx = param.get('idx');

  useEffect(() => {
    if (token.accessToken !== '') {
      setIsValid(true);
    } else {
      setIsValid(false);
    }
  }, []);

  const onClickReservation = () => {
    console.log('confirmRes : ', confirmRes);
    customAxios
      .post('/reservation/create', confirmRes)
      .then((r) => {
        console.log(r.data);
        dispatch(saveCompleteInfo({ ...r.data }));
        navigate('/checkReservation/complete');
      })
      .catch((e) => {
        const errorStatus = e.response.status;
        const errorMsg = e.response.data.message;

        if (errorStatus === 500) {
          alert('서버 오류 입니다. 잠시 후 다시 시도해 주세요.');
          dispatch(removeToken());
          navigate('/');
        } else {
          alert(errorMsgList[`${errorMsg}`]);
          dispatch(removeToken());
        }
      });
  };

  return (
    <>
      {!isValid ? (
        <InvalidModal langType={langType} />
      ) : (
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
                queryIdx={queryIdx}
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
      )}
    </>
  );
}

export default ConfirmReservation;
