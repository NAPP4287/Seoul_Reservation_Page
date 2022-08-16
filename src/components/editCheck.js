import {
  CompWrap,
  ReservationBox,
  PersonCountWrap,
  UserInfoWrap,
} from '../style/compReservationInfoStyle';
import { useSelector } from 'react-redux';
import { filterLanguage } from '../common/filterLanguage';
import { useState } from 'react';
import { getEctInfo } from '../redux/reservation/reservationEct';

function EditCheckInfo({ langType, info }) {
  const setTime = () => {
    const hour = Number(info.time.split(':')[0]);
    const minutes = info.time.split(':')[1];

    if (hour < 12) {
      return `AM ${info.time}`;
    } else if (hour === 12) {
      return `PM ${info.time}`;
    } else {
      return `PM ${hour - 12}:${minutes}`;
    }
  };

  return (
    <CompWrap>
      <div className='titleWrap'>
        <div className='confirmHead'>
          {filterLanguage('completeTitle', langType)}
        </div>
        <div className='reservationNum'>{info.reservationCode}</div>
      </div>

      <ReservationBox>
        <div className='headTitle'>{info.date}</div>
        <PersonCountWrap>
          <div>{filterLanguage('personCount', langType)}</div>
          <div>
            {info.ticketCount}
            {filterLanguage('person', langType)}/
            {info.price === 0 ? filterLanguage('price', langType) : info.price}
          </div>
        </PersonCountWrap>

        <UserInfoWrap>
          <div className='reservationTitleWrap'>
            <div className='headTitle'>
              {filterLanguage('userInfo', langType)}
            </div>
          </div>

          <ul>
            <li>
              <div className='type'>
                {filterLanguage('reservationType', langType)}
              </div>
              <p>{info.title}</p>
            </li>

            <li>
              <div className='type'>
                {filterLanguage('userTitle', langType)}
              </div>
              <p>{info.userName}</p>
            </li>

            <li>
              <div className='type'>{filterLanguage('phone', langType)}</div>
              <p>
                <span>+{info.countryCode}</span>
                {info.userPhone}
              </p>
            </li>
          </ul>
        </UserInfoWrap>
      </ReservationBox>
    </CompWrap>
  );
}

export default EditCheckInfo;
