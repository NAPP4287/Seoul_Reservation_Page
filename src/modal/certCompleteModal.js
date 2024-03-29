import { ModalBack } from '../style/invalidModalStyle';
import { useSelector, useDispatch } from 'react-redux';
import { modalInfo } from '../redux/modal/modalOpen';
import { certCompleteModalClose } from '../redux/modal/modalOpen';
import { filterLanguage } from '../common/filterLanguage';

function CertCompleteModal({ langType }) {
  const dispatch = useDispatch();

  const closeModal = () => {
    dispatch(certCompleteModalClose());
  };

  return (
    <ModalBack>
      <div className='certModalBox'>
        <div className='title'>
          {filterLanguage('certModalTitle', langType)}
        </div>
        <button onClick={closeModal}>
          {filterLanguage('confirmBtn', langType)}
        </button>
      </div>
    </ModalBack>
  );
}

export default CertCompleteModal;
