import { customAxios } from '../axios/custromAxios';
import { useEffect, useState } from 'react';
import { ProgramListWrap } from '../style/programListStyle';
import { useNavigate } from 'react-router';
import { filterLanguage } from '../common/filterLanguage';
import Loading from './loading';
import { getAccessToken } from '../redux/token/accessToken';
import InvalidModal from '../modal/invalidModal';
import { useSelector } from 'react-redux';

function CheckReservationList({ langType }) {
  const [programList, setProgramList] = useState([]);
  const navigate = useNavigate();
  const params = { lang: langType };
  const [cl, setCl] = useState(true);
  const [isValid, setIsValid] = useState(true);
  const token = useSelector(getAccessToken);

  useEffect(() => {
    if (token.accessToken === '') {
      setIsValid(false);
    } else {
      setIsValid(true);
    }
    getReservationList();
  }, [langType]);

  const getReservationList = () => {
    customAxios
      .get('/confirm/list', {
        params: params,
        headers: { authorization: `Bearer ${token.accessToken}` },
      })
      .then((r) => {
        if (r.data.list === null) {
          setProgramList([]);
        } else {
          setProgramList([...r.data.list]);
        }
      })
      .then(() => setCl(true))
      .catch((e) => {
        if (e.response.status === 401) {
          setCl(true);
          setIsValid(false);
        } else {
          setCl(false);
        }
      });
  };

  const goChkReservation = (reservationCode) => {
    navigate(
      `/checkReservation/reservationList/edit?reservationCode=${reservationCode}`
    );
  };

  return (
    <>
      {/* !isValid => isValid로 꼭 변경할 것 */}
      {!isValid ? (
        <InvalidModal langType={langType} />
      ) : (
        <>
          {cl ? (
            <div className='contentWrap'>
              <ProgramListWrap>
                <div className='listTitle'>
                  {filterLanguage('checkListTitle', langType)} (
                  {programList.length})
                </div>

                {programList.map((el, idx) => (
                  <li
                    key={idx}
                    onClick={() => goChkReservation(el.reservationCode)}
                  >
                    <h3>{el.title}</h3>
                    <span>
                      {el.price === 0
                        ? filterLanguage('price', langType)
                        : el.price}
                    </span>
                  </li>
                ))}
              </ProgramListWrap>
            </div>
          ) : (
            <Loading />
          )}
        </>
      )}
    </>
  );
}

export default CheckReservationList;
