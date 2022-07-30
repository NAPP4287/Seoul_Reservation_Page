import {
  LandingWrap,
  LandingImg,
  ButtonWrap,
  LandingTitle,
  LandingContent,
} from '../style/landingStyle';
import Nav from '../components/nav';
import { useNavigate } from 'react-router-dom';

function LandingPage() {
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
            <LandingTitle>
              Seoul Beauty <br />
              Travel Week
            </LandingTitle>
            <ButtonWrap>
              <button
                onClick={() => {
                  clickGoPage('reservation');
                }}
              >
                예약하기
              </button>
              <button
                onClick={() => {
                  clickGoPage('check');
                }}
              >
                예약조회
              </button>
            </ButtonWrap>

            <a href='https://www.naver.com/'>
              서울 뷰티트래블 위크 홈페이지로 이동
            </a>
          </LandingContent>
        </LandingWrap>
      </div>
    </div>
  );
}

export default LandingPage;
