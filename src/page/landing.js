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

function LandingPage({ langType }) {
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
          <LandingImg />
          <LandingContent>
            <LandingTitle className='hiddenText'>
              Seoul Beauty <br />
              Travel Week
            </LandingTitle>
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
        </LandingWrap>
      </div>
    </div>
  );
}

export default LandingPage;
