import { ModalBack } from '../style/invalidModalStyle';
import { filterLanguage } from '../common/filterLanguage';

function InvalidModal({ langType }) {
  const goLanding = () => {
    window.location.replace('/');
  };

  return (
    <ModalBack>
      <div className='modalBox'>
        <div className='title'>유효하지 않는 접근입니다.</div>
        <button onClick={goLanding}>
          {filterLanguage('confirmBtn', langType)}
        </button>
      </div>
    </ModalBack>
  );
}

export default InvalidModal;
