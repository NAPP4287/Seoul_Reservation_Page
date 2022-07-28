import { NavWrap, GlobalWrap, BackPageBtn } from '../style/navStyle';

function BackNav() {
  const backPage = () => {
    window.history.back();
  };

  return (
    <NavWrap>
      <div className='navPadding'>
        <BackPageBtn onClick={backPage}>
          <div></div>
        </BackPageBtn>
        <GlobalWrap className='btnColor'>
          Languages <div></div>
        </GlobalWrap>
      </div>
    </NavWrap>
  );
}

export default BackNav;
