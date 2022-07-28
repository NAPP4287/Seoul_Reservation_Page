import { useEffect, useState } from 'react';
import CompReservationInfo from '../components/comReservationInfo';
import CompNotification from '../components/compNotification';
import CancelModal from '../modal/cancelModal';

function EditReservation() {
  const [isPlace, setIsPlace] = useState(true);

  const [reservationCode, setReservationCode] = useState(null);
  const [showCancelModal, setShowCancelModal] = useState(false);

  const openCancelModal = () => {
    setShowCancelModal(true);
  };

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    setReservationCode(params.get('reservationCode'));
  }, [reservationCode]);

  return (
    <div>
      {showCancelModal ? (
        <CancelModal setShowCancelModal={setShowCancelModal} />
      ) : null}
      <div className='contentWrap'>
        <CompReservationInfo />
        {isPlace ? <CompNotification /> : null}
        <div className='buttonWrap leftPadding'>
          <button className='btnLeft' onClick={openCancelModal}>
            예약 취소
          </button>
          <button
            className='btnRight'
            onClick={() => window.location.replace('/')}
          >
            확인
          </button>
        </div>
      </div>
    </div>
  );
}

export default EditReservation;
