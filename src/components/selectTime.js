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
}) {
  const [activeBtn, setActiveBtn] = useState({ idx: null, active: false });

  const dispatch = useDispatch();
  const ectInfo = useSelector(getEctInfo);

  const handleTime = (idx, timeTitle) => {
    setReservationInfo({ ...reservationInfo, ticketIdx: idx });
    setActiveBtn({ idx: idx, active: true });
    console.log(timeTitle);
    dispatch(saveEctInfo({ ...ectInfo, time: timeTitle }));
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
        <div className='timeTitle'>
          {filterLanguage('selectTime', langType)}
        </div>

        <SelectTimeBox>
          {ticketList.map((el, idx) => (
            <button
              key={el.ticketIdx}
              disabled={el.count === 0 ? true : false}
              onClick={() => handleTime(el.ticketIdx, el.title)}
              style={
                activeBtn.idx === el.ticketIdx && activeBtn.active
                  ? { backgroundColor: 'black', color: 'white' }
                  : { backgroundColor: 'transparent' }
              }
            >
              {el.title}
              <span>{el.remainTicket} / 20</span>
            </button>
          ))}
        </SelectTimeBox>
      </SelectTimeWrap>
    </div>
  );
}

export default SelectTime;
