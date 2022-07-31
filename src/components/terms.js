import { TermsWrap } from '../style/termsStyle';
import { useState } from 'react';

function Terms({ setTermsIdx, setReservationInfo, reservationInfo }) {
  const [inputs, setInputs] = useState([
    { name: 'one', checked: false },
    { name: 'two', checked: false },
    { name: 'three', checked: false },
    { name: 'four', checked: false },
  ]);

  const checkboxHandler = (e) => {
    if (e.target.name !== 'one') {
      setInputs(
        inputs.map((item) =>
          item.name === e.target.name
            ? { ...item, checked: e.currentTarget.checked }
            : { ...item }
        )
      );
      if (e.target.name === 'two') {
        setReservationInfo({
          ...reservationInfo,
          IsPersonalInfo: !inputs[1].checked,
        });
      } else if (e.target.name === 'three') {
        setReservationInfo({
          ...reservationInfo,
          IsCreditInfo: !inputs[2].checked,
        });
      } else if (e.target.name === 'four') {
        setReservationInfo({
          ...reservationInfo,
          IsSmsReceive: !inputs[3].checked,
        });
      }
      console.log(reservationInfo);
    } else {
      setInputs(
        inputs.map((item) => ({ ...item, checked: e.currentTarget.checked }))
      );

      setReservationInfo({
        ...reservationInfo,
        IsPersonalInfo: e.currentTarget.checked,
        IsCreditInfo: e.currentTarget.checked,
        IsSmsReceive: e.currentTarget.checked,
      });
    }
  };

  return (
    <div className='contentWrap leftPadding'>
      <div className='reservationTitleWrap'>
        <div className='headTitle'>약관동의</div>
      </div>

      <TermsWrap>
        <li>
          <input
            name='one'
            type={'checkbox'}
            checked={
              inputs.filter((el) => el.name !== 'one' && el.checked).length ===
              3
            }
            onChange={(e) => {
              checkboxHandler(e);
            }}
          />
          <label>전체동의</label>
        </li>
        <li>
          <input
            name='two'
            type={'checkbox'}
            onChange={(e) => {
              checkboxHandler(e);
            }}
            checked={inputs[1].checked}
          />
          <label onClick={() => setTermsIdx(1)}>
            (필수) 개인(신용)정보 수집 · 이용 동의
          </label>
        </li>
        <li>
          <input
            name='three'
            type={'checkbox'}
            onChange={(e) => {
              checkboxHandler(e);
            }}
            checked={inputs[2].checked}
          />{' '}
          <label onClick={() => setTermsIdx(2)}>(필수) 개인정보 제공동의</label>
        </li>
        <li>
          <input
            name='four'
            type={'checkbox'}
            onChange={(e) => {
              checkboxHandler(e);
            }}
            checked={inputs[3].checked}
          />{' '}
          <label onClick={() => setTermsIdx(3)}>
            (필수) 신청결과 알림 수신동의
          </label>
        </li>
      </TermsWrap>
    </div>
  );
}

export default Terms;
