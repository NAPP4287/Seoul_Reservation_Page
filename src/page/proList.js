import { ProgramListWrap, BottomContent } from '../style/programListStyle';
import { Link } from 'react-router-dom';
import { programList } from '../data/programList';

function ProList() {
  return (
    <div>
      <div className='contentWrap'>
        <ProgramListWrap>
          {programList.map((el, idx) => (
            <li key={idx}>
              <h3>{el}</h3>

              <BottomContent>
                <span>무료</span>
                <Link to={`/programList/reservation?idx=${idx}`}>
                  <button>예약하기</button>
                </Link>
              </BottomContent>
            </li>
          ))}
          {/* <li>
            <h3>서울뷰티하우스</h3>

            <BottomContent>
              <span>무료</span>
              <Link to='/programList/reservation?idx=0'>
                <button>예약하기</button>
              </Link>
            </BottomContent>
          </li>

          <li>
            <h3>인왕산 트래킹</h3>

            <BottomContent>
              <span>무료</span>
              <Link to='/'>
                <button>예약하기</button>
              </Link>
            </BottomContent>
          </li>

          <li>
            <h3>어반 싸이클링</h3>

            <BottomContent>
              <span>무료</span>
              <Link to='/'>
                <button>예약하기</button>
              </Link>
            </BottomContent>
          </li>

          <li>
            <h3>어반 싸이클링</h3>

            <BottomContent>
              <span>무료</span>
              <Link to='/'>
                <button>예약하기</button>
              </Link>
            </BottomContent>
          </li>

          <li>
            <h3>경복궁 시티런</h3>

            <BottomContent>
              <span>무료</span>
              <Link to='/'>
                <button>예약하기</button>
              </Link>
            </BottomContent>
          </li>

          <li>
            <h3>윤동주문학관 투어</h3>

            <BottomContent>
              <span>무료</span>
              <Link to='/'>
                <button>예약하기</button>
              </Link>
            </BottomContent>
          </li> */}
        </ProgramListWrap>
      </div>
    </div>
  );
}

export default ProList;
