import { useEffect, useState } from 'react';
import CompReservationInfo from '../components/comReservationInfo';
import CompNotification from '../components/compNotification';
import CancelModal from '../modal/cancelModal';
import { customAxios } from '../axios/custromAxios';
import { useDispatch } from 'react-redux';
import { saveCompleteInfo } from '../redux/reservation/completeReservation';
import { useNavigate } from 'react-router';

function EditReservation() {
  const [isPlace, setIsPlace] = useState(true);
  const [reservationCode, setReservationCode] = useState(null);
  const [showCancelModal, setShowCancelModal] = useState(false);
  const [checkNoti, setCheckNoti] = useState(true);

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
      .then((r) => dispatch(saveCompleteInfo({ ...r.data })))
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
        <CompReservationInfo />
        {isPlace ? <CompNotification setCheckNoti={setCheckNoti} /> : null}
        <div className='buttonWrap leftPadding'>
          <button className='btnLeft' onClick={openCancelModal}>
            예약 취소
          </button>
          <button className='btnRight' onClick={goLanding}>
            확인
          </button>
        </div>
      </div>
    </div>
  );
}

export default EditReservation;
