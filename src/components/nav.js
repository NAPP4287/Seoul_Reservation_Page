import {
  NoneBackNavWrap,
  GlobalWrap,
  LanguageWrap,
  WhiteBackPageBtn,
} from '../style/navStyle';
import { useDispatch } from 'react-redux';
import { selectLanguage } from '../redux/langSelect/language';
import { useState } from 'react';
import { langList } from '../data/languageList';

function Nav({ isBackBtn }) {
  const dispatch = useDispatch();
  const [showList, setShowList] = useState(false);

  const goLanguage = (lang) => {
    dispatch(selectLanguage(lang));
    setShowList(false);
  };

  const backPage = () => {
    window.history.back();
  };

  const showLangList = () => {
    showList ? setShowList(false) : setShowList(true);
  };

  return (
    <div>
      <NoneBackNavWrap>
        <div className='navPadding'>
          {isBackBtn ? (
            <WhiteBackPageBtn onClick={backPage}>
              <div></div>
            </WhiteBackPageBtn>
          ) : (
            <div></div>
          )}
          <GlobalWrap onClick={showLangList} style={{ color: 'white' }}>
            Languages{' '}
            <div
              className='whiteDown'
              style={
                showList
                  ? { transform: 'rotate(180deg)' }
                  : { transform: 'rotate(0)' }
              }
            ></div>
          </GlobalWrap>
        </div>
      </NoneBackNavWrap>
      {showList ? (
        <LanguageWrap>
          {langList.nav.map((el, idx) => (
            <li key={idx} onClick={() => goLanguage(el.langType)}>
              {el.language}
            </li>
          ))}
        </LanguageWrap>
      ) : null}
    </div>
  );
}

export default Nav;
