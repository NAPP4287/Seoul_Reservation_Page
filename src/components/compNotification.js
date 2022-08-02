import { useState } from 'react';
import {
  NotificationBox,
  NotificationWrap,
  NotificationCheck,
} from '../style/confirmReservationStyle';
import downArrow from '../assets/downArrow.png';
import { filterLanguage } from '../common/filterLanguage';

function CompNotification({ setCheckNoti, langType }) {
  const [showDetail, setShowDetail] = useState(false);

  const openNotification = () => {
    if (showDetail) {
      setShowDetail(false);
    } else {
      setShowDetail(true);
    }
  };

  const handleCheckNoti = (e) => {
    setCheckNoti(!e.currentTarget.checked);
  };

  return (
    <NotificationWrap>
      <div className='reservationTitleWrap'>
        <div className='headTitle'>
          {filterLanguage('noticeReservation', langType)}
        </div>
      </div>
      <NotificationCheck>
        <li>
          <input
            name='one'
            type={'checkbox'}
            onChange={(e) => handleCheckNoti(e)}
          />

          <div onClick={openNotification}>
            <label>주의사항 및 안내사항 확인</label>
            <img
              src={downArrow}
              alt='down arrow'
              style={
                showDetail
                  ? { transform: 'rotate(180deg)' }
                  : { transform: 'rotate(0)' }
              }
            />
          </div>
        </li>

        {showDetail ? (
          <NotificationBox>
            ・서울 뷰티 하우스 관람 예약은 1인 1회에 한하여 선착순 예약제로
            운영되며 취소 전까지 추가 신청 및 중복 예약은 불가능합니다.
            <br />
            ・신분증상에서의 실명 예약 필수입니다. <br />
            ・ 휴대폰 번호로 예약 관람 안내 정보를 발송 드리며, 예약 완료 페이지
            또는 예약 안내 보여주셔야 입장 가능합니다. ・ 방문 예정 일자 하루
            전에도 예약 알림 문자를 수신하지 못하신 경우에는 사무국으로 문의하여
            주시기 바랍니다. <br />
            ・ 예약 후 당일 방문이 어려울 시 방문일 하루 전까지 취소
            부탁드립니다.
            <br />・ 제3자에게 양도하거나 유상 판매 및 교환이 불가능하며, 필요시
            현장에서 신분증(여권, 운전면허증, 주민등록증)을 확인할 수 있습니다.{' '}
            <br />
            ・ 당일 사전 예약 미달 및 취소 시 해당 인원수에 한정하여 현장 접수가
            가능합니다.
            <br />
            ・ 예약시간에 맞춰 입장이 가능하며, 예약 시간 30분 경과 시 예약이
            자동 취소되며, 예약 시간 내에만 입장이 가능합니다.
            <br /> ・ 관람 당일 예약 이외 인원 추가 불가합니다. [서울 뷰티하우스
            공간 주의사항]
            <br />
            ・ 서울 뷰티 하우스 행사가 진행되는 휘겸재 공간은 한옥 문화재입니다.
            모든 시설 및 고가구, 미술품은 눈으로만 감상 부탁드리며, 모든 공간은
            금역 구역입니다. <br />・ 안전하고 쾌적한 관람 환경을 위해 음식물과
            인화성 물질은 반입은 금지되어 있으며, 애완동물 동반이 불가합니다.
            바퀴 달린 신발 및 문화재 공간 훼손 우려가 있는 인라인, 킥보드 등은
            입장 제한될 수 있습니다. <br />
            ・ 아이 동반일 경우 충분한 사전교육을 부탁드리며, 큰소리를 내거나
            다른 방문객의 불편을 초래하지 않도록 보살펴 주시기 바랍니다.
            <br />・ 관람자 부주의로 인한 시설물 훼손의 경우 상응하는 손해배상이
            청구 될 수 있습니다.
          </NotificationBox>
        ) : null}
      </NotificationCheck>
    </NotificationWrap>
  );
}

export default CompNotification;
