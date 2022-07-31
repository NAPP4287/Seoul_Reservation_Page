import { useState } from 'react';
import { SelectTimeWrap, SelectTimeBox } from '../style/selectTimeStyle';

function SelectTime({
  setReservationInfo,
  reservationInfo,
  ticketList,
  queryIdx,
}) {
  const [activeBtn, setActiveBtn] = useState({ idx: null, active: false });

  const handleTime = (idx) => {
    setReservationInfo({ ...reservationInfo, ticketIdx: idx });
    setActiveBtn({ idx: idx, active: true });
  };

  const setTime = () => {
    let arr = [];

    if (queryIdx === '1') {
      for (let i = 0; i < ticketList.length; i++) {
        if (i === 2) {
          arr.push(`PM 12:00`);
        }

        if (i >= 3) {
          arr.push(`PM ${i - 2}:00`);
        } else {
          arr.push(`AM ${10 + i}:00`);
        }
      }
    }
    return arr;
  };

  setTime();

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
              {setTime()[idx]}
              <span>{el.remainTicket} / 20</span>
            </button>
          ))}
        </SelectTimeBox>
      </SelectTimeWrap>
    </div>
  );
}

export default SelectTime;
