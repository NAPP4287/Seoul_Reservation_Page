import BackNav from '../components/backNav';
import {
  ProgramListWrap,
  ProgramBoxWrap,
  BottomContent,
} from '../style/programListStyle';
import { Link } from 'react-router-dom';

function ProList() {
  return (
    <ProgramBoxWrap>
      <BackNav />

      <div className='contentWrap'>
        <ProgramListWrap>
          <li>
            <h3>서울뷰티하우스</h3>

            <BottomContent>
              <span>무료</span>
              <Link to='/programList/reservation'>
                <button>예약하기</button>
              </Link>
            </BottomContent>
          </li>

          <li>
            <h3>서울뷰티하우스</h3>

            <BottomContent>
              <span>무료</span>
              <Link to='/'>
                <button>예약하기</button>
              </Link>
            </BottomContent>
          </li>

          <li>
            <h3>서울뷰티하우스</h3>

            <BottomContent>
              <span>무료</span>
              <Link to='/'>
                <button>예약하기</button>
              </Link>
            </BottomContent>
          </li>

          <li>
            <h3>서울뷰티하우스</h3>

            <BottomContent>
              <span>무료</span>
              <Link to='/'>
                <button>예약하기</button>
              </Link>
            </BottomContent>
          </li>

          <li>
            <h3>서울뷰티하우스</h3>

            <BottomContent>
              <span>무료</span>
              <Link to='/'>
                <button>예약하기</button>
              </Link>
            </BottomContent>
          </li>
        </ProgramListWrap>
      </div>
    </ProgramBoxWrap>
  );
}

export default ProList;
