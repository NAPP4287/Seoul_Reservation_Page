import {
  ChkBodyWrap,
  LikeSelectBox,
  LikeCountrySelectBox,
} from '../style/reservationInfoCompStyle';
import { programList, countryCode } from '../data/programList';
import {
  saveReservation,
  reservation,
} from '../redux/reservation/reservationInfo';
import Timer from './timer';
import { useState } from 'react';
import { customAxios } from '../axios/custromAxios';
import { saveToken } from '../redux/token/accessToken';
import { useDispatch } from 'react-redux';

function ReservationInfoComp({
  certConfirm,
  setCertConfirm,
  showOptionBox,
  setShowOptionBox,
  showCountryCode,
  setShowCountryCode,
  reservationPage,
  setReservationInfo,
  reservationInfo,
  setIsTermComplete,
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
  const [errorMsg, setErrorMsg] = useState('');
  const dispatch = useDispatch();

  const handlePhoneCertReq = () => {
    test();
  };

  const test = () => {
    customAxios
      .post('/auth/phone', {
        phone: sendPhone.phone.replace('0', ''),
        countryCode: sendPhone.countryCode,
      })
      .then((r) => {
        console.log(r);
        setCertConfirm(true);
        setCertTime(false);
      })
      .catch((e) => {
        const status = e.response.status;
        if (status === 400) {
          setErrorMsg('잘못된 인증 요청입니다.');
        } else if (status === 500) {
          setErrorMsg('서버 오류입니다.');
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
  };

  const handleChangeCode = (e) => {
    e.target.value = e.target.value.replace(/[^0-9]/g, '');
    setSendPhone({ ...sendPhone, authCode: e.target.value });
    console.log(sendPhone);
    setReservationInfo({ ...reservationInfo, authCode: e.target.value });
  };

  const clickCheckCode = () => {
    customAxios
      .post('/auth/phone/check', {
        phone: sendPhone.phone.replace('0', ''),
        countryCode: sendPhone.countryCode,
        authCode: sendPhone.authCode,
      })
      .then((r) => {
        setErrorMsg('');
        setCertConfirm(false);
        setBtnText('완료');
        dispatch(saveToken(r.data.Authorization));
        setIsTermComplete(true);
      })
      .catch((e) => {
        const status = e.response.status;
        if (status === 400) {
          setErrorMsg('잘못된 인증 요청입니다.');
        } else if (status === 500) {
          setErrorMsg('서버 오류입니다.');
        }
        setCertTime(true);
      });
  };

  return (
    <div>
      {reservationPage ? null : (
        <ChkBodyWrap>
          <p>예약 유형 선택</p>
          <LikeSelectBox>
            <div
              className='selectType'
              onClick={() => handleShowOptionBox('reservation')}
              style={
                selectOption.selectType === '예약 유형을 선택하세요'
                  ? { color: '#c5c5c5' }
                  : { color: 'black' }
              }
            >
              {selectOption.selectType}
            </div>
            <ul
              className='list-member'
              style={showOptionBox ? { display: 'block' } : { display: 'none' }}
            >
              {programList.map((el, idx) => (
                <li key={idx} onClick={() => clickOption('selectType', el)}>
                  {el}
                </li>
              ))}
            </ul>
          </LikeSelectBox>
        </ChkBodyWrap>
      )}

      <ChkBodyWrap>
        <p>성명</p>
        <input
          placeholder='예약자 성명을 입력하세요'
          onChange={handleChangeUserName}
          value={selectOption.name}
        />
      </ChkBodyWrap>

      <ChkBodyWrap>
        <p>핸드폰 번호</p>
        <div className='countryWrap'>
          <LikeCountrySelectBox>
            <div
              className='selectType'
              onClick={() => handleShowOptionBox('countryCode')}
            >
              +{sendPhone.countryCode}
            </div>
            <ul
              className='list-member'
              style={
                showCountryCode ? { display: 'block' } : { display: 'none' }
              }
            >
              {countryCode.map((el) => (
                <li key={el} onClick={() => clickOption('countryCode', el)}>
                  +{el}
                </li>
              ))}
            </ul>
          </LikeCountrySelectBox>

          <input
            placeholder='번호를 입력하세요'
            onChange={checkPhone}
            maxLength='11'
            value={sendPhone.phone}
          />
        </div>
      </ChkBodyWrap>

      <ChkBodyWrap>
        <p>인증 번호</p>
        <div className='certWrap'>
          <input
            placeholder='인증 번호 입력'
            value={reservationInfo.authCode}
            onChange={handleChangeCode}
          />
          <button onClick={handlePhoneCertReq} disabled={certConfirm}>
            {certConfirm ? (
              <Timer
                setCertTime={setCertTime}
                setcertConfirm={setCertConfirm}
                certTime={certTime}
                setErrorMsg={setErrorMsg}
                setBtnText={setBtnText}
              />
            ) : (
              btnText
            )}
          </button>
        </div>
        {certTime ? <span>{errorMsg}</span> : null}

        {certConfirm ? (
          <button className='normalBtn' onClick={clickCheckCode}>
            인증완료
          </button>
        ) : null}
      </ChkBodyWrap>
    </div>
  );
}

export default ReservationInfoComp;
