import CompReservationInfo from '../components/comReservationInfo';
import { useNavigate } from 'react-router';
import { filterLanguage } from '../common/filterLanguage';
import { removeReservation } from '../redux/reservation/reservationInfo';
import { removeToken, getAccessToken } from '../redux/token/accessToken';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import InvalidModal from '../modal/invalidModal';

function CompleteReservation({ langType }) {
  const dispatch = useDispatch();
  const token = useSelector(getAccessToken);
  const [isValid, setIsValid] = useState(false);

  useEffect(() => {
    if (token.accessToken === '') {
      setIsValid(true);
    } else {
      setIsValid(false);
    }
  }, []);

  const navigate = useNavigate();
  console.log(token);
  const goLanding = () => {
    dispatch(removeToken());
    navigate('/');
  };

  return (
    <div>
      {!isValid ? (
        <InvalidModal />
      ) : (
        <>
          <div className='contentWrap leftPadding'>
            <CompReservationInfo langType={langType} />
          </div>

          <div className='btnWrap'>
            <button className='activeBtn' onClick={goLanding}>
              {filterLanguage('confirmBtn', langType)}
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default CompleteReservation;
