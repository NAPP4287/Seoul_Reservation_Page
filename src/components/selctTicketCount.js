import { CountPersonWrap, ButtonWrap } from '../style/selectTicketCountStyle';
import { useState } from 'react';

function SelectTicketCount({ selectTime }) {
  const [personCount, setPersonCount] = useState(1);

  const addPerson = (plusOrMinu) => {
    if (plusOrMinu === 'add') {
      setPersonCount(personCount + 1);
    } else {
      setPersonCount(personCount - 1);
    }
  };

  return (
    <div className='contentWrap'>
      <div className='reservationTitleWrap'>
        <div className='headTitle'>인원/수량을 선택해주세요</div>
      </div>
      <CountPersonWrap>
        {selectTime === '' ? (
          <p>*일정을 먼저 선택해주세요</p>
        ) : (
          <div className='personCountBtn'>
            <p>예약인원</p>
            <ButtonWrap>
              <button
                className='minus'
                onClick={() => addPerson('minus')}
                disabled={personCount === 0}
              >
                -
              </button>
              <span>{personCount}</span>
              <button
                onClick={() => addPerson('add')}
                disabled={personCount === 2}
                style={
                  personCount === 2
                    ? { backroundColor: '#C5C5C5' }
                    : { backgroundColor: 'black' }
                }
              >
                +
              </button>
            </ButtonWrap>
          </div>
        )}
      </CountPersonWrap>
    </div>
  );
}

export default SelectTicketCount;
