import { useState } from 'react';
import { SelectTimeWrap, SelectTimeBox } from '../style/selectTimeStyle';

function SelectTime({ setReservationInfo, reservationInfo, ticketList }) {
  const [activeBtn, setActiveBtn] = useState({ idx: null, active: false });

  const handleTime = (idx) => {
    setReservationInfo({ ...reservationInfo, ticketIdx: idx });
    setActiveBtn({ idx: idx, active: true });
  };

  // const aaa = (idx) => {
  //   let changeTime = 10;

  //   for (let i = 0; i < ticketList.length; i++) {}
  // };

  return (
    <div className='contentWrap'>
      <SelectTimeWrap>
        <div className='timeTitle'>시간을 선택해주세요</div>

        <SelectTimeBox>
          {ticketList.map((el, idx) => (
            <button
              key={el.ticketIdx}
              disabled={el.count === 0 ? true : false}
              onClick={() => handleTime(el.ticketIdx)}
              style={
                activeBtn.idx === el.ticketIdx && activeBtn.active
                  ? { backgroundColor: 'black', color: 'white' }
                  : { backgroundColor: 'transparent' }
              }
            >
              10:00
              <span>{el.remainTicket} / 20</span>
            </button>
          ))}
        </SelectTimeBox>
      </SelectTimeWrap>
    </div>
  );
}

export default SelectTime;
