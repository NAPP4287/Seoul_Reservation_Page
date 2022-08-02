import CompReservationInfo from '../components/comReservationInfo';
import { useNavigate } from 'react-router';

function CompleteReservation({ langType }) {
  const navigate = useNavigate();
  const goLanding = () => {
    navigate('/');
  };

  return (
    <div>
      <div className='contentWrap leftPadding'>
        <CompReservationInfo langType={langType} />
      </div>

      <div>
        <button className='activeBtn' onClick={goLanding}>
          확인
        </button>
      </div>
    </div>
  );
}

export default CompleteReservation;
