import { customAxios } from '../axios/custromAxios';
import { useEffect, useState } from 'react';
import { ProgramListWrap } from '../style/programListStyle';
import { useNavigate } from 'react-router';

function CheckReservationList() {
  const [programList, setProgramList] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    getReservationList();
  }, []);

  const getReservationList = () => {
    customAxios.get('/confirm/list').then((r) => {
      setProgramList([...r.data.list]);
    });
  };

  const goChkReservation = (reservationCode) => {
    // console.log(reservationCode);
    navigate(
      `/checkReservation/reservationList/edit?reservationCode=${reservationCode}`
    );
  };

  return (
    <div className='contentWrap'>
      <ProgramListWrap>
        <div className='listTitle'>예약 조회 ({programList.length})</div>

        {programList.map((el, idx) => (
          <li key={idx} onClick={() => goChkReservation(el.reservationCode)}>
            <h3>{el.title}</h3>
            <span>{el.price === 0 ? '무료' : el.price}</span>
          </li>
        ))}
      </ProgramListWrap>
    </div>
  );
}

export default CheckReservationList;
