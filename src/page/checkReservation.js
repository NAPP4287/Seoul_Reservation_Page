import BackNav from '../components/backNav';
import { ProgramBoxWrap } from '../style/programListStyle';
import {
  ChkResWrap,
  ChkTitleWrap,
  ChkBodyWrap,
  LikeSelectBox,
  LikeCountrySelectBox,
} from '../style/checkReservationStyle';
import { useState, useRef } from 'react';

function CheckReservation() {
  const [certConfirm, setCertConfirm] = useState(false);
  const [showOptionBox, setShowOptionBox] = useState(false);
  const [showCountryCode, setShowCountryCode] = useState(false);
  const outSection = useRef();

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

  return (
    <ProgramBoxWrap>
      <BackNav />

      <ChkResWrap
        className='contentWrap'
        ref={outSection}
        onClick={(e) => {
          if (outSection.current === e.target) {
            setShowOptionBox(false);
            setShowCountryCode(false);
          }
        }}
      >
        <ChkTitleWrap ref={outSection}>
          <h3>예약 조회</h3>
        </ChkTitleWrap>

        <div>
          <ChkBodyWrap>
            <p>예약 유형 선택</p>
            <LikeSelectBox>
              <div
                className='selectType'
                onClick={() => handleShowOptionBox('reservation')}
              >
                예약 유형을 선택하세요
              </div>
              <ul
                className='list-member'
                style={
                  showOptionBox ? { display: 'block' } : { display: 'none' }
                }
              >
                <li>서울뷰티하우스</li>
                <li>프로그램1</li>
                <li>프로그램2</li>
                <li>프로그램3</li>
                <li>프로그램14</li>
              </ul>
            </LikeSelectBox>
          </ChkBodyWrap>

          <ChkBodyWrap>
            <p>예약자</p>
            <input placeholder='예약자 성명을 입력하세요' />
          </ChkBodyWrap>

          <ChkBodyWrap>
            <p>핸드폰 번호</p>
            <div className='countryWrap'>
              <LikeCountrySelectBox>
                <div
                  className='selectType'
                  onClick={() => handleShowOptionBox('countryCode')}
                >
                  +82
                </div>
                <ul
                  className='list-member'
                  style={
                    showCountryCode ? { display: 'block' } : { display: 'none' }
                  }
                >
                  <li>+82</li>
                  <li>+86</li>
                  <li>+81</li>
                  <li>+1</li>
                  <li>+기타</li>
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

        <button style={{ color: '#C5C5C5' }}>조회하기</button>
      </ChkResWrap>
    </ProgramBoxWrap>
  );
}

export default CheckReservation;
