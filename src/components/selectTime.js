import { useState } from 'react';
import { SelectTimeWrap, SelectTimeBox } from '../style/selectTimeStyle';
import { saveEctInfo, getEctInfo } from '../redux/reservation/reservationEct';
import { useDispatch, useSelector } from 'react-redux';
import { filterLanguage } from '../common/filterLanguage';

function SelectTime({
  setReservationInfo,
  reservationInfo,
  ticketList,
  queryIdx,
  langType,
  activeTimeBtn,
  setActiveTimeBtn,
}) {
  const dispatch = useDispatch();
  const [isAm, setIsAm] = useState(false);
  const ectInfo = useSelector(getEctInfo);

  const handleTime = (idx, timeTitle) => {
    setReservationInfo({ ...reservationInfo, ticketIdx: idx });
    setActiveTimeBtn({ idx: idx, active: true });
    dispatch(saveEctInfo({ ...ectInfo, time: timeTitle }));
  };

  // const setTime = () => {
  //   let arr = [];

  //   if (queryIdx === '1') {
  //     for (let i = 0; i < ticketList.length; i++) {
  //       if (i === 2) {
  //         arr.push(`PM 12:00`);
  //       }

  //       if (i >= 3) {
  //         arr.push(`PM ${i - 2}:00`);
  //       } else {
  //         arr.push(`AM ${10 + i}:00`);
  //       }
  //     }
  //   }
  //   return arr;
  // };

  const setTime = (time) => {
    const hour = Number(time.title.split(':')[0]);
    const minutes = time.title.split(':')[1];

    if (hour < 12) {
      return `AM ${time.title}`;
    } else if (hour === 12) {
      return `PM ${time.title}`;
    } else {
      return `PM ${hour - 12}:${minutes}`;
    }
  };

  const remainTicket = (time) => {
    return `${time.remainTicket} / ${time.totalTicket}`;
  };

  return (
    <div className='contentWrap'>
      <SelectTimeWrap>
        <div className='timeTitle'>
          {filterLanguage('selectTime', langType)}
        </div>

        <SelectTimeBox>
          {ticketList.map((el, idx) => (
            <button
              key={el.ticketIdx}
              disabled={el.remainTicket === 0 ? true : false}
              onClick={() => handleTime(el.ticketIdx, el.title)}
              style={
                activeTimeBtn.idx === el.ticketIdx && activeTimeBtn.active
                  ? { backgroundColor: 'black', color: 'white' }
                  : { backgroundColor: 'transparent' }
              }
            >
              {setTime(el)}
              <span>
                {el.remainTicket === 0 ? '예약마감' : remainTicket(el)}
              </span>
            </button>
          ))}
        </SelectTimeBox>
      </SelectTimeWrap>
    </div>
  );
}

export default SelectTime;
