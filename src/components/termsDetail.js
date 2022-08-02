import { CloseWrap, DetailBox, TermsWrap } from '../style/termsDetailStyle';
import close from '../assets/close.png';
import { filterLanguage } from '../common/filterLanguage';

function TermsDetail({ termsIdx, setTermsIdx, langType }) {
  const termsDesc = () => {
    if (termsIdx === 1) {
      return (
        <DetailBox>
          <div>{filterLanguage('termsPrivacy', langType)}</div>
          <ul>
            <li>{filterLanguage('privacy1', langType)}</li>
            <li className='inner'>
              {filterLanguage('privacy1Desc', langType)}
            </li>
            <li>{filterLanguage('privacy2', langType)}</li>
            <li className='inner'>
              {filterLanguage('privacy2Desc', langType)}
            </li>
            <li>{filterLanguage('privacy3', langType)}</li>
            <li className='inner'>
              {filterLanguage('privacy3Desc1', langType)}
            </li>
            <li className='inner'>
              {filterLanguage('privacy3Desc2', langType)}
            </li>
            <li>{filterLanguage('privacy4', langType)}</li>
            <li className='inner'>
              {filterLanguage('privacy4Desc', langType)}
            </li>
          </ul>
        </DetailBox>
      );
    } else if (termsIdx === 2) {
      return (
        <DetailBox>
          <div>{filterLanguage('termsInfo', langType)}</div>
          <ul>
            <li>{filterLanguage('information1', langType)}</li>
            <li className='inner'>
              {filterLanguage('information1Desc', langType)}
            </li>
            <li>{filterLanguage('information2', langType)}</li>
            <li className='inner'>
              {filterLanguage('information2Desc', langType)}
            </li>
            <li>{filterLanguage('information3', langType)}</li>
            <li className='inner'>
              {filterLanguage('information3Desc1', langType)}
            </li>
            <li className='inner'>
              {filterLanguage('information3Desc2', langType)}
            </li>
            <li>{filterLanguage('information4', langType)}</li>
            <li className='inner'>
              {filterLanguage('information4Desc', langType)}
            </li>
            <li>{filterLanguage('information5', langType)}</li>
            <li className='inner'>
              {filterLanguage('information5Desc', langType)}
            </li>
          </ul>
        </DetailBox>
      );
    } else {
      return (
        <DetailBox>
          <div>{filterLanguage('termsNotice', langType)}</div>
          <ul>
            <li>{filterLanguage('noticeDesc', langType)}</li>
          </ul>
        </DetailBox>
      );
    }
  };

  return (
    <TermsWrap>
      <CloseWrap>
        <img src={close} onClick={() => setTermsIdx(0)} alt='close button' />
      </CloseWrap>

      <div className='contentWrap'>{termsDesc()}</div>
    </TermsWrap>
  );
}

export default TermsDetail;
