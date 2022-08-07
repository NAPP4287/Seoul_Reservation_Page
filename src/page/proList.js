import {
  ProgramListWrap,
  BottomContent,
  BackImgWrap,
} from '../style/programListStyle';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { saveEctInfo, getEctInfo } from '../redux/reservation/reservationEct';
import { customAxios } from '../axios/custromAxios';
import { useDispatch, useSelector } from 'react-redux';
import { filterLanguage } from '../common/filterLanguage';

function ProList({ langType }) {
  const [proList, setProList] = useState([]);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const ectInfo = useSelector(getEctInfo);

  const clickProgram = (viewIdx, price, title) => {
    navigate(`/programList/reservation?idx=${viewIdx}`);
    dispatch(saveEctInfo({ ...ectInfo, price: price, resType: title }));
  };
  useEffect(() => {
    const params = { lang: langType };
    customAxios
      .get('reservation/list', { params: params })
      .then((r) => setProList([...r.data.list]));
  }, []);
  return (
    <BackImgWrap>
      <div className='backImg'></div>
      <div className='contentWrap'>
        <ProgramListWrap>
          {proList.map((el, idx) => (
            <li key={idx}>
              <h3>{el.title}</h3>

              <BottomContent>
                <span>
                  {el.price === 0
                    ? filterLanguage('price', langType)
                    : el.price}
                </span>
                <button
                  className='hiddenText'
                  onClick={() => clickProgram(el.viewIdx, el.price, el.title)}
                >
                  {filterLanguage('reservationBtn', langType)}
                </button>
              </BottomContent>
            </li>
          ))}
        </ProgramListWrap>
      </div>
    </BackImgWrap>
  );
}

export default ProList;
