import CompReservationInfo from '../components/comReservationInfo';

function CompleteReservation() {
  return (
    <div>
      <div className='contentWrap leftPadding'>
        <CompReservationInfo />
      </div>

      <div>
        <button
          className='activeBtn'
          onClick={() => window.location.replace('/')}
        >
          확인
        </button>
      </div>
    </div>
  );
}

export default CompleteReservation;
