import {
  LandingWrap,
  LandingImg,
  ButtonWrap,
  LandingTitle,
  LandingContent,
} from '../style/landingStyle';
import Nav from '../components/nav';
import { Link } from 'react-router-dom';

function LandingPage() {
  return (
    <div>
      <Nav />
      <div className='contentWrap'>
        <LandingWrap>
          <LandingImg />
          <LandingContent>
            <LandingTitle>
              Seoul Beauty <br />
              Travel Week
            </LandingTitle>
            <ButtonWrap>
              <Link to='/programList'>
                <button>예약하기</button>
              </Link>
              <Link to='/checkReservation'>
                <button>예약조회</button>
              </Link>
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
