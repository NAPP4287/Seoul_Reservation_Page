import { CountPersonWrap, ButtonWrap } from '../style/selectTicketCountStyle';

function SelectTicketCount({ setReservationInfo, reservationInfo }) {
  const addPerson = (plusOrMinu) => {
    if (plusOrMinu === 'add') {
      setReservationInfo({
        ...reservationInfo,
        ticketCount: reservationInfo.ticketCount + 1,
      });
    } else {
      setReservationInfo({
        ...reservationInfo,
        ticketCount: reservationInfo.ticketCount - 1,
      });
    }
  };

  return (
    <div className='contentWrap'>
      <div className='reservationTitleWrap'>
        <div className='headTitle'>인원/수량을 선택해주세요</div>
      </div>
      <CountPersonWrap>
        {reservationInfo.ticketIdx === null ? (
          <p>*일정을 먼저 선택해주세요</p>
        ) : (
          <div className='personCountBtn'>
            <p>예약인원</p>
            <ButtonWrap>
              <button
                className='minus'
                onClick={() => addPerson('minus')}
                disabled={reservationInfo.ticketCount === 0}
              >
                -
              </button>
              <span>{reservationInfo.ticketCount}</span>
              <button
                onClick={() => addPerson('add')}
                disabled={reservationInfo.ticketCount === 2}
                style={
                  reservationInfo.ticketCount === 2
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
