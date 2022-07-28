import { NoneBackNavWrap, GlobalWrap } from '../style/navStyle';

function Nav() {
  return (
    <NoneBackNavWrap>
      <div className='navPadding'>
        <div></div>
        <GlobalWrap>
          Languages <div></div>
        </GlobalWrap>
      </div>
    </NoneBackNavWrap>
  );
}

export default Nav;
