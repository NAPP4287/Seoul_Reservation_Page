import { useEffect, useState } from 'react';
import CompReservationInfo from '../components/comReservationInfo';
import CompNotification from '../components/compNotification';
import CancelModal from '../modal/cancelModal';
import { customAxios } from '../axios/custromAxios';
import { useDispatch } from 'react-redux';
import { saveCompleteInfo } from '../redux/reservation/completeReservation';
import { useNavigate } from 'react-router';
import { filterLanguage } from '../common/filterLanguage';

function EditReservation({ langType }) {
  const [isPlace, setIsPlace] = useState(true);
  const [reservationCode, setReservationCode] = useState(null);
  const [showCancelModal, setShowCancelModal] = useState(false);
  const [checkNoti, setCheckNoti] = useState(true);

  const noneCheck = true;

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
    navigate('/');
  };

  const getInfo = () => {
    customAxios
      .get(`/confirm/view/${reservationCode}`)
      .then((r) => {
        dispatch(saveCompleteInfo({ ...r.data }));
      })
      .catch((e) => console.log(e));
  };

  return (
    <div>
      {showCancelModal ? (
        <CancelModal
          setShowCancelModal={setShowCancelModal}
          reservationCode={reservationCode}
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
    </div>
  );
}

export default EditReservation;
