import { CountPersonWrap, ButtonWrap } from '../style/selectTicketCountStyle';

function SelectTicketCount({ setReservationInfo, reservationInfo }) {
  const addPerson = (plusOrMinu) => {
    if (plusOrMinu === 'add') {
      setReservationInfo({
        ...reservationInfo,
        personCount: reservationInfo.personCount + 1,
      });
    } else {
      setReservationInfo({
        ...reservationInfo,
        personCount: reservationInfo.personCount - 1,
      });
    }
  };

  return (
    <div className='contentWrap'>
      <div className='reservationTitleWrap'>
        <div className='headTitle'>인원/수량을 선택해주세요</div>
      </div>
      <CountPersonWrap>
        {reservationInfo.time === '' ? (
          <p>*일정을 먼저 선택해주세요</p>
        ) : (
          <div className='personCountBtn'>
            <p>예약인원</p>
            <ButtonWrap>
              <button
                className='minus'
                onClick={() => addPerson('minus')}
                disabled={reservationInfo.personCount === 0}
              >
                -
              </button>
              <span>{reservationInfo.personCount}</span>
              <button
                onClick={() => addPerson('add')}
                disabled={reservationInfo.personCount === 2}
                style={
                  reservationInfo.personCount === 2
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
