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
  saveReservaion,
  getReservation,
} from '../redux/reservation/reservationInfo';

function LandingPage({ langType }) {
  const dispatch = useDispatch();
  const reservationInfo = useSelector(getReservation);
  const [userIdx, setUserIdx] = useState(19);
  const param = new URLSearchParams(window.location.search);

  useEffect(() => {
    customAxios
      .get('/', { params: { userIdx: userIdx } })
      .then((r) => {
        setUserIdx(param.get('userIdx'));
      })
      .then(() => {
        if (userIdx === null) {
          dispatch(saveReservaion({ ...reservationInfo, userIdx: 0 }));
        } else {
          dispatch(saveReservaion({ ...reservationInfo, userIdx: userIdx }));
        }
      });
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
