import { useState } from 'react';
import { SelectTimeWrap, SelectTimeBox } from '../style/selectTimeStyle';

function SelectTime({ setReservationInfo, reservationInfo }) {
  const [activeBtn, setActiveBtn] = useState({ idx: null, active: false });

  const handleTime = (idx, time) => {
    setReservationInfo({ ...reservationInfo, time: time });
    setActiveBtn({ idx: idx, active: true });
  };

  const aaa = [
    { time: '오전 10시', count: 15 },
    { time: '오전 12시', count: 20 },
    { time: '오후 2시', count: 0 },
    { time: '오후 4시', count: 5 },
    { time: '오후 5시', count: 2 },
  ];

  return (
    <div className='contentWrap'>
      <SelectTimeWrap>
        <div className='timeTitle'>시간을 선택해주세요</div>

        <SelectTimeBox>
          {aaa.map((el, idx) => (
            <button
              key={idx}
              disabled={el.count === 0 ? true : false}
              onClick={() => handleTime(idx, 10)}
              style={
                activeBtn.idx === idx && activeBtn.active
                  ? { backgroundColor: 'black', color: 'white' }
                  : { backgroundColor: 'transparent' }
              }
            >
              {el.time} <span>{el.count} / 20</span>
            </button>
          ))}
        </SelectTimeBox>
      </SelectTimeWrap>
    </div>
  );
}

export default SelectTime;
