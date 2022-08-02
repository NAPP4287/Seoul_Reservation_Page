import { customAxios } from '../axios/custromAxios';
import { useEffect, useState } from 'react';
import { ProgramListWrap } from '../style/programListStyle';
import { useNavigate } from 'react-router';
import { filterLanguage } from '../common/filterLanguage';

function CheckReservationList({ langType }) {
  const [programList, setProgramList] = useState([]);
  const navigate = useNavigate();
  const params = { lang: langType };

  useEffect(() => {
    getReservationList();
  }, []);

  const getReservationList = () => {
    customAxios.get('/confirm/list', { params: params }).then((r) => {
      setProgramList([...r.data.list]);
    });
  };

  const goChkReservation = (reservationCode) => {
    console.log(reservationCode);
    navigate(
      `/checkReservation/reservationList/edit?reservationCode=${reservationCode}`
    );
  };

  return (
    <div className='contentWrap'>
      <ProgramListWrap>
        <div className='listTitle'>
          {filterLanguage('checkListTitle', langType)} ({programList.length})
        </div>

        {programList.map((el, idx) => (
          <li key={idx} onClick={() => goChkReservation(el.reservationCode)}>
            <h3>{el.title}</h3>
            <span>
              {el.price === 0 ? filterLanguage('price', langType) : el.price}
            </span>
          </li>
        ))}
      </ProgramListWrap>
    </div>
  );
}

export default CheckReservationList;
