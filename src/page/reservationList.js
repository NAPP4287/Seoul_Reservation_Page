import { Link } from 'react-router-dom';
import { ReservationListWrap, ListBox } from '../style/reservationListStyle';

function ReservationList() {
  return (
    <div className='contentWrap'>
      <ReservationListWrap>
        <div className='reservationTitleWrap'>
          <div className='headTitle'>예약조회 (2)</div>
        </div>
        <ListBox>
          <Link
            to={`/checkReservation/reservationList/edit?reservationCode=${1}`}
          >
            <li>
              <h3>서울 뷰티 하우스</h3>
              <span>무료</span>
            </li>
          </Link>
          <Link
            to={`/checkReservation/reservationList/edit?reservationCode=${2}`}
          >
            <li>
              <h3>인왕산 트래킹</h3>
              <span>무료</span>
            </li>
          </Link>
        </ListBox>
      </ReservationListWrap>
    </div>
  );
}

export default ReservationList;
