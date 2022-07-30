import { NoneBackNavWrap, GlobalWrap, LanguageWrap } from '../style/navStyle';
import { useDispatch } from 'react-redux';
import { selectLanguage } from '../redux/langSelect/language';
import { useState } from 'react';
import { langList } from '../data/languageList';

function Nav() {
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
      <NoneBackNavWrap>
        <div className='navPadding'>
          <div></div>
          <GlobalWrap onClick={showLangList}>
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
      </NoneBackNavWrap>
      {showList ? (
        <LanguageWrap>
          {langList.map((el, idx) => (
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
