import { ModalBack } from '../style/invalidModalStyle';

function CancelModal({ setShowCancelModal }) {
  const goLanding = () => {
    window.location.replace('/');
  };
  const closeModal = () => {
    setShowCancelModal(false);
  };
  return (
    <ModalBack>
      <div className='modalBox'>
        <div>예약을 취소하시겠습니까?</div>
        <div className='btnWrap'>
          <button onClick={goLanding}>확인</button>
          <button onClick={closeModal}>취소</button>
        </div>
      </div>
    </ModalBack>
  );
}

export default CancelModal;
