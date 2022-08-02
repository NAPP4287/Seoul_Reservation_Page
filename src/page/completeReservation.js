import CompReservationInfo from '../components/comReservationInfo';
import { useNavigate } from 'react-router';
import { filterLanguage } from '../common/filterLanguage';

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
          {filterLanguage('confirmBtn', langType)}
        </button>
      </div>
    </div>
  );
}

export default CompleteReservation;
