import {
  ChkBodyWrap,
  LikeSelectBox,
  LikeCountrySelectBox,
} from '../style/reservationInfoCompStyle';
import { programList, countryCode } from '../data/programList';
import { useSelector, useDispatch } from 'react-redux';
import {
  saveReservation,
  reservation,
} from '../redux/reservation/reservationInfo';
import { useState } from 'react';

function ReservationInfoComp({
  certConfirm,
  setCertConfirm,
  showOptionBox,
  setShowOptionBox,
  showCountryCode,
  setShowCountryCode,
  reservationPage,
}) {
  const dispatch = useDispatch();
  const reservationInfo = useSelector(reservation);
  const [selectOption, setSelectOption] = useState({
    selectType: '예약 유형을 선택하세요',
    countryCode: '+82',
    name: '',
  });

  const handlePhoneCertReq = () => {
    setCertConfirm(true);
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
      setSelectOption({ ...selectOption, countryCode: value });
      setShowCountryCode(false);
    }
  };

  const handleChangeUserName = (e) => {
    setSelectOption({ ...selectOption, name: e.target.value });
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
              {selectOption.countryCode}
            </div>
            <ul
              className='list-member'
              style={
                showCountryCode ? { display: 'block' } : { display: 'none' }
              }
            >
              {countryCode.map((el) => (
                <li key={el} onClick={() => clickOption('countryCode', el)}>
                  {el}
                </li>
              ))}
            </ul>
          </LikeCountrySelectBox>

          <input placeholder='번호를 입력하세요' />
        </div>
      </ChkBodyWrap>

      <ChkBodyWrap>
        <p>인증 번호</p>
        <div className='certWrap'>
          <input placeholder='인증 번호 입력' />
          <button onClick={handlePhoneCertReq}>
            {certConfirm ? '확인' : '인증요청'}
          </button>
        </div>
      </ChkBodyWrap>
    </div>
  );
}

export default ReservationInfoComp;
