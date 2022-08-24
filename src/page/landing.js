import {
  LandingWrap,
  LandingImg,
  ButtonWrap,
  LandingTitle,
  LandingContent,
} from '../style/landingStyle';
import Nav from '../components/nav';
import { useNavigate } from 'react-router-dom';
import { filterLanguage } from '../common/filterLanguage';
import { customAxios } from '../axios/custromAxios';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  saveReservation,
  getReservation,
} from '../redux/reservation/reservationInfo';

function LandingPage({ langType }) {
  const dispatch = useDispatch();
  const reservation = useSelector(getReservation);

  const param = new URLSearchParams(window.location.search);
  const paramUserIdx = param.get('userIdx');

  useEffect(() => {
    if (paramUserIdx !== null) {
      dispatch(
        saveReservation({ ...getReservation, userIdx: Number(paramUserIdx) })
      );
    } else {
      dispatch(saveReservation({ ...getReservation, userIdx: 0 }));
    }
  }, []);

  const navigate = useNavigate();
  const clickGoPage = (page) => {
    switch (page) {
      case 'reservation':
        navigate('/programList');
        break;
      case 'check':
        navigate('/checkReservation');
        break;
      default:
        break;
    }
  };

  return (
    <div>
      <Nav />
      <div className='landingWrap'>
        <LandingWrap>
          <LandingImg>
            <LandingContent>
              <LandingTitle>Seoul Beauty Travel Week</LandingTitle>
              <ButtonWrap>
                <button
                  className='hiddenText'
                  onClick={() => {
                    clickGoPage('reservation');
                  }}
                >
                  {filterLanguage('reservationBtn', langType)}
                </button>
                <button
                  className='hiddenText'
                  onClick={() => {
                    clickGoPage('check');
                  }}
                >
                  {filterLanguage('checkReservationBtn', langType)}
                </button>
              </ButtonWrap>

              <a className='hiddenText' href='https://www.naver.com/'>
                {filterLanguage('seoulBeautyHomePage', langType)}
              </a>
            </LandingContent>
          </LandingImg>
        </LandingWrap>
      </div>
    </div>
  );
}

export default LandingPage;
