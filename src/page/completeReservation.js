import CompReservationInfo from '../components/comReservationInfo';
import { useNavigate } from 'react-router';
import { filterLanguage } from '../common/filterLanguage';
import {
  removeReservation,
  getReservation,
} from '../redux/reservation/reservationInfo';
import { removeToken, getAccessToken } from '../redux/token/accessToken';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { getCompleteInfo } from '../redux/reservation/completeReservation';
import { getEctInfo } from '../redux/reservation/reservationEct';
import InvalidModal from '../modal/invalidModal';

function CompleteReservation({ langType }) {
  const dispatch = useDispatch();
  const token = useSelector(getAccessToken);
  const [isValid, setIsValid] = useState(false);

  const reservationInfo = useSelector(getCompleteInfo);
  const reservationEct = useSelector(getEctInfo);

  useEffect(() => {
    if (token.accessToken === '') {
      setIsValid(false);
    } else {
      setIsValid(true);
    }
  }, []);

  const navigate = useNavigate();
  const goLanding = () => {
    dispatch(removeToken());
    navigate('/');
  };

  return (
    <div>
      {!isValid ? (
        <InvalidModal langType={langType} />
      ) : (
        <>
          <div className='contentWrap leftPadding'>
            <CompReservationInfo langType={langType} info={reservationInfo} />
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
