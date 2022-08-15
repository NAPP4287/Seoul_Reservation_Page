import { useState, useEffect } from 'react';
import {
  NotificationBox,
  NotificationWrap,
  NotificationCheck,
} from '../style/confirmReservationStyle';
import downArrow from '../assets/downArrow.png';
import { filterLanguage } from '../common/filterLanguage';
import { customAxios } from '../axios/custromAxios';

function CompNotification({ setCheckNoti, langType, noneCheck, queryIdx }) {
  const [showDetail, setShowDetail] = useState(false);
  const [noticeContent, setNoticeContent] = useState('');
  const params = { lang: langType };

  useEffect(() => {
    customAxios.get(`/reservation/info/${queryIdx}`).then((r) => {
      setNoticeContent(r.data.body);
    });
  }, [langType]);

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
          {noneCheck ? null : (
            <input
              name='one'
              type={'checkbox'}
              onChange={(e) => handleCheckNoti(e)}
            />
          )}

          <div onClick={openNotification}>
            <label>{filterLanguage('noticeReservation', langType)}</label>
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
            {noticeContent.split('\n').map((e) => (
              <li key={e}>{e}</li>
            ))}
          </NotificationBox>
        ) : null}
      </NotificationCheck>
    </NotificationWrap>
  );
}

export default CompNotification;
