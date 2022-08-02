import { ModalBack } from '../style/invalidModalStyle';
import { useSelector, useDispatch } from 'react-redux';
import { modalInfo } from '../redux/modal/modalOpen';
import { certCompleteModalClose } from '../redux/modal/modalOpen';

function CertCompleteModal() {
  const dispatch = useDispatch();

  const closeModal = () => {
    dispatch(certCompleteModalClose());
  };

  return (
    <ModalBack>
      <div className='certModalBox'>
        <div className='title'>인증이 완료됐습니다</div>
        <button onClick={closeModal}>확인</button>
      </div>
    </ModalBack>
  );
}

export default CertCompleteModal;
