import React from 'react';
import {
  CalendarWrap,
  MonthWrap,
  CalendarHeader,
  CalendarBody,
  CalendarEnd,
} from '../style/calendarStyle';
import smallNextArrow from '../assets/smallDownArrow.png';
import { useState, useEffect } from 'react';
import { customAxios } from '../axios/custromAxios';

function CalendarComp({
  setReservationInfo,
  reservationInfo,
  queryIdx,
  setTicketList,
}) {
  const [calendarMonth, setCalendarMonth] = useState(9);
  const [activeColor, setActiveColor] = useState({
    idx: null,
    active: false,
  });
  const [dateArr, setDateArr] = useState([]);
  const date = ['일', '월', '화', '수', '목', '금', '토'];
  const lastDate = new Date(2022, calendarMonth, 0).getDate();
  const startDay = new Date(2022, calendarMonth - 1).getDay();
  const currentDate = new Date();

  let arrDate = [];

  const getDate = (month) => {
    if (calendarMonth < 10) {
      // customAxios
      //   .get(`reservation/view/${queryIdx}/20220${month}`)
      //   .then((r) => {
      //     console.log('9', r);
      //     setDateArr([...r.data.dateList]);
      //   });
      setDateArr([{ itemIdx: 6, itemDate: '2022.9.30', isType: 0 }]);
    } else {
      customAxios.get(`reservation/view/${queryIdx}/2022${month}`).then((r) => {
        console.log('10', r);
        setDateArr([...r.data.dateList]);
      });
    }
  };

  useEffect(() => {
    if (currentDate.getMonth() > calendarMonth - 1) {
      setCalendarMonth(10);
    }
    getDate(calendarMonth);
  }, [calendarMonth]);

  const goMonth = (prevOrNext) => {
    if (prevOrNext === 'next') {
      setCalendarMonth(10);
    } else {
      setCalendarMonth(9);
    }
    setActiveColor({ idx: null, active: false });
    setReservationInfo({ ...reservationInfo, itemIdx: null });
  };

  const handleCalendarBody = () => {
    for (let j = 0; j < startDay; j++) {
      arrDate.push({ date: null, isType: 1, itemIdx: null });
    }

    for (let i = 1; i <= lastDate; i++) {
      const activeDate = dateArr.map((el) => Number(el.itemDate.split('.')[2]));
      const activeMonth = dateArr.map((el) =>
        Number(el.itemDate.split('.')[1])
      );
      const itemIdxArr = dateArr.map((el) => el.itemIdx);
      const isTypeArr = dateArr.map((el) => el.isType);

      if (activeDate.includes(i)) {
        arrDate.push({
          date: i,
          isType: isTypeArr[i - 1],
          itemIdx: itemIdxArr[i - 1],
        });
      } else {
        arrDate.push({ date: i, isType: 1, itemIdx: null });
      }
    }
    return arrDate;
  };

  const handleChangeDate = (idx, date, itemIdx) => {
    setActiveColor({ idx: idx, active: true });
    setReservationInfo({
      ...reservationInfo,
      month: calendarMonth,
      date: date,
      itemIdx: itemIdx,
    });

    console.log(reservationInfo);

    customAxios
      .get(`/reservation/date/${queryIdx}/${itemIdx}`)
      .then((r) => setTicketList([...r.data.ticketList]));
  };

  handleCalendarBody();

  return (
    <div className='contentWrap'>
      <CalendarWrap>
        <div className='headTitle'>일정을 선택해주세요</div>

        <MonthWrap>
          <button className='left' onClick={() => goMonth('prev')}>
            {calendarMonth === 9 ? (
              <div></div>
            ) : (
              <img src={smallNextArrow} alt='이전달로 넘어가는 이미지' />
            )}
          </button>

          <h3>2022.{calendarMonth}</h3>

          <button className='right' onClick={() => goMonth('next')}>
            {calendarMonth === 10 ? (
              <div></div>
            ) : (
              <img src={smallNextArrow} alt='다음달로 넘어가는 이미지' />
            )}
          </button>
        </MonthWrap>
        <CalendarHeader>
          {date.map((el) => (
            <div key={el}>{el}</div>
          ))}
        </CalendarHeader>
        <CalendarBody>
          {arrDate.map((el, idx) => (
            <button
              key={idx}
              style={
                el.isType === 1 ? { color: '#C5C5C5' } : { color: 'black' }
              }
              onClick={() => handleChangeDate(idx, el.date, el.itemIdx)}
              disabled={el.isType === 1}
            >
              <span
                style={
                  activeColor.idx === idx && el.isType === 0
                    ? { backgroundColor: 'black', color: 'white' }
                    : { backgroundColor: 'transparent' }
                }
              >
                {el.date}
              </span>
            </button>
          ))}
        </CalendarBody>
        <CalendarEnd>
          <div>
            <span className='possible'></span> 예약가능
          </div>
          <div>
            <span className='end'></span> 예약마감
          </div>
          <div>
            <span className='impossible'></span> 예약불가
          </div>
        </CalendarEnd>
      </CalendarWrap>
    </div>
  );
}

export default CalendarComp;
