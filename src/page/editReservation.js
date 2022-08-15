import { useEffect, useState } from 'react';
import CompReservationInfo from '../components/comReservationInfo';
import CompNotification from '../components/compNotification';
import CancelModal from '../modal/cancelModal';
import { customAxios } from '../axios/custromAxios';
import { useDispatch, useSelector } from 'react-redux';
import { saveCompleteInfo } from '../redux/reservation/completeReservation';
import { removeToken, getAccessToken } from '../redux/token/accessToken';
import { useNavigate } from 'react-router';
import { filterLanguage } from '../common/filterLanguage';
import Loading from './loading';
import InvalidModal from '../modal/invalidModal';

function EditReservation({ langType }) {
  const [isPlace, setIsPlace] = useState(true);
  const [reservationCode, setReservationCode] = useState(null);
  const [showCancelModal, setShowCancelModal] = useState(false);
  const [checkNoti, setCheckNoti] = useState(true);
  const [cl, setCl] = useState(false);
  const token = useSelector(getAccessToken);
  const [isValid, setIsValid] = useState(false);
  const noneCheck = true;

  useEffect(() => {
    if (token.accessToken === '') {
      setIsValid(true);
    } else {
      setIsValid(false);
    }
  }, []);

  const dispatch = useDispatch();

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    setReservationCode(params.get('reservationCode'));
    getInfo();
  }, [reservationCode]);

  const openCancelModal = () => {
    setShowCancelModal(true);
  };

  const navigate = useNavigate();
  const goLanding = () => {
    dispatch(removeToken());
    navigate('/');
  };

  const getInfo = () => {
    customAxios
      .get(`/confirm/view/${reservationCode}`)
      .then((r) => {
        dispatch(saveCompleteInfo({ ...r.data }));
      })
      .then(() => setCl(true))
      .catch((e) => console.log(e));
  };

  return (
    <div>
      {!isValid ? (
        <InvalidModal langType={langType} />
      ) : (
        <>
          {cl ? (
            <>
              {showCancelModal ? (
                <CancelModal
                  setShowCancelModal={setShowCancelModal}
                  reservationCode={reservationCode}
                  langType={langType}
                />
              ) : null}
              <div className='contentWrap'>
                <CompReservationInfo langType={langType} />
                {isPlace ? (
                  <CompNotification
                    setCheckNoti={setCheckNoti}
                    langType={langType}
                    noneCheck={noneCheck}
                  />
                ) : null}
                <div className='buttonWrap leftPadding'>
                  <button className='btnLeft' onClick={openCancelModal}>
                    {filterLanguage('cancelBtn', langType)}
                  </button>
                  <button className='btnRight' onClick={goLanding}>
                    {filterLanguage('confirmBtn', langType)}
                  </button>
                </div>
              </div>
            </>
          ) : (
            <Loading />
          )}
        </>
      )}
    </div>
  );
}

export default EditReservation;
