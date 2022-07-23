import { NavWrap, GlobalWrap } from '../style/navStyle';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';

function Nav() {
  return (
    <NavWrap>
      <div>
        <div></div>
        <GlobalWrap>
          Languages <FontAwesomeIcon icon={faAngleDown} />
        </GlobalWrap>
      </div>
    </NavWrap>
  );
}

export default Nav;
