import {
  CompWrap,
  ReservationBox,
  PersonCountWrap,
  UserInfoWrap,
} from '../style/compReservationInfoStyle';
import { useSelector } from 'react-redux';
import { getCompleteInfo } from '../redux/reservation/completeReservation';
import { filterLanguage } from '../common/filterLanguage';

function CompReservationInfo({ langType }) {
  const reservationInfo = useSelector(getCompleteInfo);

  return (
    <CompWrap>
      <div className='titleWrap'>
        <div className='confirmHead'>
          {filterLanguage('completeTitle', langType)}
        </div>
        <div className='reservationNum'>{reservationInfo.reservationCode}</div>
      </div>

      <ReservationBox>
        <div className='headTitle'>2022.7.23(토) 오후 12:00</div>
        <PersonCountWrap>
          <div>{filterLanguage('personCount', langType)}</div>
          <div>
            {reservationInfo.ticketCount}인/
            {reservationInfo.price === 0
              ? filterLanguage('price', langType)
              : reservationInfo.price}
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
              <p>{reservationInfo.title}</p>
            </li>

            <li>
              <div className='type'>
                {filterLanguage('userTitle', langType)}
              </div>
              <p>{reservationInfo.userName}</p>
            </li>

            <li>
              <div className='type'>{filterLanguage('phone', langType)}</div>
              <p>
                <span>+{reservationInfo.countryCode}</span>
                {reservationInfo.userPhone}
              </p>
            </li>
          </ul>
        </UserInfoWrap>
      </ReservationBox>
    </CompWrap>
  );
}

export default CompReservationInfo;
