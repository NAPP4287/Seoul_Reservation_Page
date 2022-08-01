import { ModalBack } from '../style/invalidModalStyle';
import { useNavigate } from 'react-router';

function InvalidModal() {
  const goLanding = () => {
    window.location.replace('/');
  };
  return (
    <ModalBack>
      <div className='modalBox'>
        <div className='title'>유효하지 않는 접근입니다.</div>
        <button onClick={goLanding}>확인</button>
      </div>
    </ModalBack>
  );
}

export default InvalidModal;
