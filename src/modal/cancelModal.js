import { ModalBack } from '../style/invalidModalStyle';
import { customAxios } from '../axios/custromAxios';
import { useNavigate } from 'react-router';

function CancelModal({ setShowCancelModal, reservationCode }) {
  const navigate = useNavigate();

  const goLanding = () => {
    navigate('/');
  };

  const closeModal = () => {
    setShowCancelModal(false);
  };

  const cancelReservation = () => {
    customAxios
      .post('/reservation/cancel', {
        reservationCode: reservationCode,
      })
      .then((r) => {
        if (r.data.result === 'success') {
          navigate('/checkReservation/reservationList/edit/cancel');
        }
      });
  };

  return (
    <ModalBack>
      <div className='modalBox'>
        <div className='title'>예약을 취소하시겠습니까?</div>
        <div className='btnWrap'>
          <button onClick={cancelReservation}>확인</button>
          <button onClick={closeModal}>취소</button>
        </div>
      </div>
    </ModalBack>
  );
}

export default CancelModal;
