import { CountPersonWrap, ButtonWrap } from '../style/selectTicketCountStyle';
import { filterLanguage } from '../common/filterLanguage';

function SelectTicketCount({ setReservationInfo, reservationInfo, langType }) {
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
        <div className='headTitle'>
          {filterLanguage('selectGuest', langType)}
        </div>
      </div>
      <CountPersonWrap>
        {reservationInfo.ticketIdx === null ? (
          <p>*{filterLanguage('selectDateDesc', langType)}</p>
        ) : (
          <div className='personCountBtn'>
            <p>{filterLanguage('guests', langType)}</p>
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
