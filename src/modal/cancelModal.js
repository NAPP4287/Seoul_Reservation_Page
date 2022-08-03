import { ModalBack } from '../style/invalidModalStyle';
import { customAxios } from '../axios/custromAxios';
import { useNavigate } from 'react-router';
import { filterLanguage } from '../common/filterLanguage';

function CancelModal({ setShowCancelModal, reservationCode, langType }) {
  const navigate = useNavigate();

  console.log(filterLanguage('yes', langType));
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
        <div className='title'>{filterLanguage('queCancel', langType)}</div>
        <div className='btnWrap'>
          <button onClick={cancelReservation}>
            {filterLanguage('yes', langType)}
          </button>
          <button onClick={closeModal}>{filterLanguage('no', langType)}</button>
        </div>
      </div>
    </ModalBack>
  );
}

export default CancelModal;
