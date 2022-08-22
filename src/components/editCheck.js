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

function EditCheckInfo({ langType, info, checkRes }) {
  const setTime = () => {
    const hour = Number(info.ticketTitle.split(':')[0]);
    const minutes = info.ticketTitle.split(':')[1];

    if (hour < 12) {
      return `AM ${info.ticketTitle}`;
    } else if (hour === 12) {
      return `PM ${info.ticketTitle}`;
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
        <div className='headTitle'>
          {info.ticketDate + ' '}
          {setTime()}
        </div>
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
