import { useEffect, useState } from 'react';
import CompNotification from '../components/compNotification';
import CancelModal from '../modal/cancelModal';
import { customAxios } from '../axios/custromAxios';
import { useDispatch, useSelector } from 'react-redux';
import { removeToken, getAccessToken } from '../redux/token/accessToken';
import { useNavigate } from 'react-router';
import { filterLanguage } from '../common/filterLanguage';
import Loading from './loading';
import InvalidModal from '../modal/invalidModal';
import EditCheckInfo from '../components/editCheck';

function EditReservation({ langType }) {
  const [reservationCode, setReservationCode] = useState(null);
  const [showCancelModal, setShowCancelModal] = useState(false);
  const [checkNoti, setCheckNoti] = useState(true);
  const [cl, setCl] = useState(false);
  const [info, setInfo] = useState({});
  const token = useSelector(getAccessToken);
  const [isValid, setIsValid] = useState(true);
  const noneCheck = true;

  const dispatch = useDispatch();
  const params = new URLSearchParams(window.location.search);
  const urlReservationCode = params.get('reservationCode');

  useEffect(() => {
    getInfo();

    if (token.accessToken === '') {
      setIsValid(false);
    } else {
      setIsValid(true);
    }
  }, []);

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
      .get(`/confirm/view/${urlReservationCode}`, {
        headers: { authorization: `Bearer ${token.accessToken}` },
      })
      .then((r) => {
        setInfo({ ...r.data });
      })
      .then(() => setCl(true))
      .catch((e) => {
        console.log(e);
        setIsValid(false);
      });
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
                  reservationCode={urlReservationCode}
                  langType={langType}
                />
              ) : null}
              <div className='contentWrap'>
                <EditCheckInfo langType={langType} info={info} />
                <CompNotification
                  setCheckNoti={setCheckNoti}
                  langType={langType}
                  noneCheck={noneCheck}
                  queryIdx={info.viewIdx}
                />
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
