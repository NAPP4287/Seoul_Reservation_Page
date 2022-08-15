import { NavWrap, GlobalWrap, LanguageWrap } from '../style/navStyle';
import { useDispatch } from 'react-redux';
import { selectLanguage } from '../redux/langSelect/language';
import { removeToken } from '../redux/token/accessToken';
import { useState } from 'react';
import { langList } from '../data/languageList';

function NoneBackNav() {
  const dispatch = useDispatch();
  const [showList, setShowList] = useState(false);

  const goLanguage = (lang) => {
    dispatch(selectLanguage(lang));
    setShowList(false);
  };

  const showLangList = () => {
    showList ? setShowList(false) : setShowList(true);
  };

  return (
    <div>
      <NavWrap>
        <div className='navPadding'>
          <div></div>
          <GlobalWrap className='btnColor' onClick={showLangList}>
            Languages{' '}
            <div
              style={
                showList
                  ? { transform: 'rotate(180deg)' }
                  : { transform: 'rotate(0)' }
              }
            ></div>
          </GlobalWrap>
        </div>
      </NavWrap>
      {showList ? (
        <LanguageWrap>
          <ul>
            {langList.nav.map((el, idx) => (
              <li key={idx} onClick={() => goLanguage(el.langType)}>
                {el.language}
              </li>
            ))}
          </ul>
        </LanguageWrap>
      ) : null}
    </div>
  );
}

export default NoneBackNav;
