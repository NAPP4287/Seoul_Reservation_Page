import { CloseWrap, TermsDetailBox } from '../style/termsDetailStyle';
import close from '../assets/close.png';

function TermsDetail({ termsIdx, setTermsIdx }) {
  const termsDesc = () => {
    if (termsIdx === 1) {
      return (
        <TermsDetailBox>
          <div>개인정보 수집 동의</div>
          <p>
            1. 수집항목 개인식별정보(CI), 이름, 휴대전화번호 <br />
            2. 수집 및 이용목적
            <br />
            서울 뷰티 트래블위크 프로그램 및 뷰티하우스 공간 예약 신청 접수, CS
            및 분쟁 발생 시 해결을 위한 기록 보존 <br />
            3. 보관기관 <br />
            ① 개인정보 수집 및 이용 목적 달성 시 지체없이 파기 <br />
            ② 단, 관련 법령에 의하여 일정 기간 보관이 필요한 경우에는 해당 기 간
            동안 보관함 <br />
            4. 동의 거부권 등에 대한 고지 <br />
            정보주체는 개인정보의 수집 및 이용 동의를 거부할 권리가 있으나, 이
            경우 서비스 이용이 제한될 수 있습니다.
          </p>
        </TermsDetailBox>
      );
    } else if (termsIdx === 2) {
      return (
        <TermsDetailBox>
          <div>개인정보 제공 동의</div>
          <p>
            1. 개인정보를 제공받는 자<br /> 서울뷰티트래블위크 사무국, 주식회사
            라이크어로컬(예약시스템/부로컬리), 더레 이어 주식회사(행사운영사){' '}
            <br />
            2. 제공하는 기본 개인정보 항목 개인식별정보(CI), 이름, 휴대전화번호,
            행사 공간 및 프로그램 예약 정보(예약유 형, 방문일자, 방문시간,
            인원수)
            <br />
            3. 개인정보를 제공받는 자의 이용목적 <br />
            ① 예약 신청 정보(개인식별정보(CI), 이름, 휴대전화번호, 예약 유형을
            포함한 상 세 신청 정보): 예약 관리, CS처리, 통계 등<br />
            ② 예약 신청정보(개인식별정보(CI), 이름, 휴대전화번호, 예약정보):
            신청 예약 결과 알림을 위한 문자서비스(SMS) 발송
            <br />
            4. 개인정보를 제공받는 자의 보유 및 이용기간
            <br />
            ① 예약신청정보(개인식별정보(CI), 이름, 휴대전화번호, 예약정보):
            동의일로부터 관람예약일 이후 3개월까지 보관 후 파기
            <br />
            5. 동의 거부권 등에 대한 고지 정보주체는 개인정보 제공 동의를 거부할
            권리가 있으나, 이 경우 서비스 이용이 제한될 수 있습니다.
          </p>
        </TermsDetailBox>
      );
    } else {
      return (
        <TermsDetailBox>
          <div>신청결과 알림 및 수신 동의</div>
          <p>
            공간예약 관련 결과 및 변동사항 안내를 신청하신 휴대폰으로 수신하는
            것에 대해 동의합니다.
          </p>
        </TermsDetailBox>
      );
    }
  };

  return (
    <div>
      <CloseWrap>
        <img src={close} onClick={() => setTermsIdx(0)} alt='close button' />
      </CloseWrap>

      <div className='contentWrap'>{termsDesc()}</div>
    </div>
  );
}

export default TermsDetail;
