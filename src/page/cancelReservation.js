import {
  CompWrap,
  ReservationBox,
  PersonCountWrap,
  UserInfoWrap,
} from '../style/compReservationInfoStyle';
import { getCompleteInfo } from '../redux/reservation/completeReservation';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { filterLanguage } from '../common/filterLanguage';

function CancelReservation({ langType }) {
  const navigate = useNavigate();

  const reservationInfo = useSelector(getCompleteInfo);
  console.log(reservationInfo);
  const goLanding = () => {
    navigate('/');
  };

  console.log(reservationInfo);

  return (
    <div>
      <div className='contentWrap leftPadding'>
        <CompWrap>
          <div className='titleWrap'>
            <div className='confirmHead'>
              {filterLanguage('completedCancel', langType)}
            </div>
            <div className='reservationNum'>
              {reservationInfo.reservationCode}
            </div>
          </div>

          <ReservationBox>
            <div className='headTitle innerPadding'>
              2022.7.23(토) 오후 12:00
            </div>
            <PersonCountWrap className='innerPadding'>
              <div>{filterLanguage('personCount', langType)}</div>
              <div>
                {reservationInfo.ticketCount}
                {filterLanguage('person', langType)}/
                {reservationInfo.price === 0
                  ? filterLanguage('price', langType)
                  : reservationInfo.price}
              </div>
            </PersonCountWrap>

            <UserInfoWrap>
              <div className='reservationTitleWrap'>
                <div className='headTitle innerPadding'>
                  {filterLanguage('userInfo', langType)}
                </div>
              </div>

              <ul className='innerPadding'>
                <li>
                  <div className='type'>
                    {filterLanguage('userInfo', langType)}
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
                  <div className='type'>
                    {filterLanguage('phone', langType)}
                  </div>
                  <p>
                    <span>+{reservationInfo.countryCode}</span>
                    {reservationInfo.userPhone}
                  </p>
                </li>
              </ul>
            </UserInfoWrap>
          </ReservationBox>
        </CompWrap>
      </div>
      <div className='btnWrap'>
        <button className='activeBtn' onClick={goLanding}>
          {filterLanguage('confirmBtn', langType)}
        </button>
      </div>
    </div>
  );
}

export default CancelReservation;
