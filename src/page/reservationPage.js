import CalendarComp from '../components/calendar';
import SelectTime from '../components/selectTime';
import BackNav from '../components/backNav';
import SelectTicketCount from '../components/selctTicketCount';
import InfoCert from '../components/infoCert';
import Terms from '../components/terms';
import TermsDetail from '../components/termsDetail';
import { ProgramBoxWrap } from '../style/programListStyle';
import { useState, useEffect } from 'react';

function ReservationPage() {
  const [queryIdx, setQueryIdx] = useState(null);
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    setQueryIdx(params.get('idx'));
  }, [queryIdx]);

  const [selectDay, setSelectDay] = useState({ month: '', date: '' });
  const [selectTime, setSelectTime] = useState({ time: '' });
  const [termsIdx, setTermsIdx] = useState(0);

  return (
    <ProgramBoxWrap>
      {termsIdx === 0 ? (
        <div>
          <BackNav />
          <CalendarComp setSelectDay={setSelectDay} />
          {selectDay.month !== '' && selectDay.date !== '' ? (
            <SelectTime selectDay={selectDay} setSelectTime={setSelectTime} />
          ) : null}

          <SelectTicketCount selectTime={selectTime.time} />

          {selectTime.time === '' ? null : (
            <div>
              <InfoCert />
              <Terms setTermsIdx={setTermsIdx} />
              <button className='normalBtn' disabled>
                예약하기
              </button>
            </div>
          )}
        </div>
      ) : (
        <TermsDetail termsIdx={termsIdx} setTermsIdx={setTermsIdx} />
      )}
    </ProgramBoxWrap>
  );
}

export default ReservationPage;
