import { NavWrap, GlobalWrap, BackPageBtn } from '../style/navStyle';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faAngleLeft } from '@fortawesome/free-solid-svg-icons';

function BackNav() {
  const backPage = () => {
    window.history.back();
  };

  return (
    <NavWrap className='backNav'>
      <div>
        <BackPageBtn onClick={backPage}>
          <FontAwesomeIcon icon={faAngleLeft} />
        </BackPageBtn>
        <GlobalWrap className='btnColor'>
          Languages <FontAwesomeIcon icon={faAngleDown} />
        </GlobalWrap>
      </div>
    </NavWrap>
  );
}

export default BackNav;
