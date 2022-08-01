import CompReservationInfo from '../components/comReservationInfo';
import { useNavigate } from 'react-router';

function CompleteReservation() {
  const navigate = useNavigate();
  const goLanding = () => {
    navigate('/');
  };

  return (
    <div>
      <div className='contentWrap leftPadding'>
        <CompReservationInfo />
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
