import {
  ChkBodyWrap,
  LikeSelectBox,
  LikeCountrySelectBox,
  CountryListWrap,
} from '../style/reservationInfoCompStyle';
import { countryCode } from '../data/programList';
import Timer from './timer';
import { useState } from 'react';
import { customAxios } from '../axios/custromAxios';
import { useDispatch } from 'react-redux';
import { filterLanguage } from '../common/filterLanguage';
import { certCompleteModalOpen } from '../redux/modal/modalOpen';
import { countryLang } from '../data/programList';
import { setCookie, removeCookie } from '../axios/cookie';
import { saveToken } from '../redux/token/accessToken';
import { errorMsgList } from '../data/errorMsg';

function ReservationInfoComp({
  certConfirm,
  setCertConfirm,
  showOptionBox,
  setShowOptionBox,
  showCountryCode,
  setShowCountryCode,
  setReservationInfo,
  reservationInfo,
  setToken,
  langType,
}) {
  const [selectOption, setSelectOption] = useState({
    selectType: '예약 유형을 선택하세요',
    name: '',
  });
  const [sendPhone, setSendPhone] = useState({
    countryCode: '82',
    phone: '',
    authCode: '',
  });

  const [btnText, setBtnText] = useState('인증요청');

  const [certTime, setCertTime] = useState(false);
  const [certComplete, setCertComplete] = useState(false);
  const [errorMsg, setErrorMsg] = useState(false);
  const [endCertTime, setEndCertTime] = useState(false);
  const [isCertActive, setIsCertActive] = useState(false);
  const [isCodeActive, setIsCodeActive] = useState(false);
  const dispatch = useDispatch();

  const handlePhoneCertReq = () => {
    setCertComplete(false);
    reqPhone();
  };

  const reqPhone = () => {
    setEndCertTime(false);
    customAxios
      .post('/auth/phone', {
        phone:
          reservationInfo.countryCode === '82'
            ? sendPhone.phone.replace('0', '')
            : sendPhone.phone,
        countryCode: reservationInfo.countryCode,
      })
      .then((r) => {
        setCertConfirm(true);
        setCertTime(false);
        setIsCertActive(false);
      })
      .catch((e) => {
        const status = e.response.status;
        if (status === 500) {
          setErrorMsg('서버 오류입니다.');
        } else {
          alert(e.response.data.message);
        }
        setCertTime(true);
      });
  };

  const handleShowOptionBox = (selectType, e) => {
    let type = selectType;
    switch (type) {
      case 'reservation':
        if (showOptionBox) {
          setShowOptionBox(false);
        } else {
          setShowCountryCode(false);
          setShowOptionBox(true);
        }
        break;
      case 'countryCode':
        if (showCountryCode) {
          setShowCountryCode(false);
        } else {
          setShowOptionBox(false);
          setShowCountryCode(true);
        }
        break;
      default:
        setShowOptionBox(false);
        break;
    }
  };

  const clickOption = (select, value) => {
    if (select === 'selectType') {
      setSelectOption({ ...selectOption, selectType: value });
      setShowOptionBox(false);
    } else {
      setSendPhone({ ...sendPhone, countryCode: value });
      setShowCountryCode(false);
      setReservationInfo({ ...reservationInfo, countryCode: value });
    }
  };

  const handleChangeUserName = (e) => {
    e.target.value = e.target.value.replace(/[^ㄱ-ㅎ|가-힣|a-z|A-Z|\s]/gi, '');
    setSelectOption({ ...selectOption, name: e.target.value });
    setReservationInfo({ ...reservationInfo, name: e.target.value });
  };

  const checkPhone = (e) => {
    e.target.value = e.target.value.replace(/[^0-9]/g, '');
    setSendPhone({ ...sendPhone, phone: e.target.value });
    setReservationInfo({ ...reservationInfo, phone: e.target.value });

    if (e.target.value.length === 11) {
      setIsCertActive(true);
    } else {
      setIsCertActive(false);
    }
  };

  const handleChangeCode = (e) => {
    e.target.value = e.target.value.replace(/[^0-9]/g, '');
    setSendPhone({ ...sendPhone, authCode: e.target.value });
    setReservationInfo({ ...reservationInfo, authCode: e.target.value });

    if (e.target.value.length !== 0) {
      setIsCodeActive(true);
    } else {
      setIsCodeActive(false);
    }
  };

  const clickCheckCode = () => {
    customAxios
      .post('/auth/phone/check', {
        phone: sendPhone.phone.replace('0', ''),
        countryCode: reservationInfo.countryCode,
        authCode: sendPhone.authCode,
      })
      .then((r) => {
        setErrorMsg(false);
        setCertConfirm(false);
        setBtnText('완료');
        setCertComplete(true);
        setToken(r.data.Authorization);
        setCertTime(true);
        setEndCertTime(false);
        dispatch(certCompleteModalOpen());
        // removeCookie('myToken');
        // setCookie('myToken', r.data.Authorization);
        dispatch(saveToken(r.data.Authorization));
        if (reservationInfo.countryCode === '82') {
          setReservationInfo({
            ...reservationInfo,
            phone: sendPhone.phone.replace('0', ''),
          });
        }
      })
      .catch((e) => {
        const status = e.response.status;
        const errorMsg = e.response.data.message;
        if (status === 500) {
          setErrorMsg('서버 오류입니다.');
        } else {
          alert(errorMsg);
        }
        setCertTime(true);
      });
  };

  const handleEctCountryCode = (e) => {
    e.target.value = e.target.value.replace(/[^0-9]/g, '');
    setReservationInfo({ ...reservationInfo, countryCode: e.target.value });
    setSelectOption({ ...selectOption, selectType: e.target.value });
  };

  return (
    <div>
      {showCountryCode ? (
        <CountryListWrap onClick={() => setShowCountryCode(false)}>
          <ul
            className='list-member'
            style={showCountryCode ? { display: 'block' } : { display: 'none' }}
          >
            {countryCode.map((el, idx) => (
              <li key={el} onClick={() => clickOption('countryCode', el)}>
                +{el} {' ' + filterLanguage('nation', langType)[idx]}
              </li>
            ))}
          </ul>
        </CountryListWrap>
      ) : null}
      <ChkBodyWrap>
        <p>{filterLanguage('name', langType)}</p>
        <input
          className='hiddenText'
          placeholder={filterLanguage('namePlaceholder', langType)}
          onChange={handleChangeUserName}
          value={selectOption.name}
        />
        <p className='inputDesc'>
          * {filterLanguage('noticeRealName', langType)}
        </p>
      </ChkBodyWrap>

      <ChkBodyWrap>
        <p>{filterLanguage('phone', langType)}</p>
        <div className='countryWrap'>
          <LikeCountrySelectBox>
            {sendPhone.countryCode === 'etc' ? (
              <div className='ectCountry'>
                +
                <input
                  maxLength='3'
                  onChange={(e) => handleEctCountryCode(e)}
                />
              </div>
            ) : (
              <div
                className='selectType'
                onClick={() => handleShowOptionBox('countryCode')}
              >
                +{sendPhone.countryCode}
              </div>
            )}
          </LikeCountrySelectBox>

          <input
            className='hiddenText'
            placeholder={filterLanguage('phonePlaceholder', langType)}
            onChange={checkPhone}
            maxLength='11'
            value={sendPhone.phone}
          />
        </div>
      </ChkBodyWrap>

      <ChkBodyWrap>
        <p>{filterLanguage('certNum', langType)}</p>
        <div className='certWrap'>
          <input
            className='hiddenText'
            placeholder={filterLanguage('certNumPlaceholder', langType)}
            value={reservationInfo.authCode}
            maxLength='6'
            onChange={handleChangeCode}
          />
          <button
            className={
              isCertActive || endCertTime ? 'active hiddenText' : 'hiddenText'
            }
            onClick={handlePhoneCertReq}
            disabled={(!isCertActive && !certTime) || certComplete}
          >
            {certConfirm ? (
              <Timer
                setCertTime={setCertTime}
                setcertConfirm={setCertConfirm}
                certTime={certTime}
                setEndCertTime={setEndCertTime}
                setBtnText={setBtnText}
                setErrorMsg={setErrorMsg}
              />
            ) : !certTime ? (
              filterLanguage('sendCert', langType)
            ) : certComplete ? (
              filterLanguage('certCompBtn', langType)
            ) : (
              filterLanguage('recert', langType)
            )}
          </button>
        </div>
        {errorMsg ? (
          <span>{filterLanguage('incorrectCert', langType)}</span>
        ) : null}
        {endCertTime ? (
          <span>{filterLanguage('endCert', langType)}</span>
        ) : null}

        {certConfirm ? (
          <button
            className={isCodeActive ? 'active' : 'normalBtn'}
            onClick={clickCheckCode}
          >
            {filterLanguage('certCompBtn', langType)}
          </button>
        ) : null}
      </ChkBodyWrap>
    </div>
  );
}

export default ReservationInfoComp;
