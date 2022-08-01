import { ProgramListWrap, BottomContent } from '../style/programListStyle';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { saveEctInfo, getEctInfo } from '../redux/reservation/reservationEct';
import { customAxios } from '../axios/custromAxios';
import { useDispatch, useSelector } from 'react-redux';

function ProList() {
  const [proList, setProList] = useState([]);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const ectInfo = useSelector(getEctInfo);

  const clickProgram = (viewIdx, price, title) => {
    navigate(`/programList/reservation?idx=${viewIdx}`);
    dispatch(saveEctInfo({ ...ectInfo, price: price, resType: title }));
  };
  useEffect(() => {
    const params = { lang: 'ko' };
    customAxios
      .get('reservation/list', { params })
      .then((r) => setProList([...r.data.list]));
  }, []);
  return (
    <div>
      <div className='contentWrap'>
        <ProgramListWrap>
          {proList.map((el, idx) => (
            <li key={idx}>
              <h3>{el.title}</h3>

              <BottomContent>
                <span>{el.price === 0 ? '무료' : el.price}</span>
                <button
                  onClick={() => clickProgram(el.viewIdx, el.price, el.title)}
                >
                  예약하기
                </button>
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
