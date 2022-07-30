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

function CalendarComp({ setReservationInfo, reservationInfo, queryIdx }) {
  const [calendarMonth, setCalendarMonth] = useState(9);
  const [activeColor, setActiveColor] = useState({ idx: null, active: false });
  const date = ['일', '월', '화', '수', '목', '금', '토'];
  const lastDate = new Date(2022, calendarMonth, 0).getDate();
  const startDay = new Date(2022, calendarMonth - 1).getDay();
  const currentDate = new Date();

  let arrDate = [];

  useEffect(() => {
    customAxios.get(`reservation/view/${queryIdx}`).then((r) => console.log(r));
    if (currentDate.getMonth() > calendarMonth - 1) {
      setCalendarMonth(10);
    }
  }, []);

  const goMonth = (prevOrNext) => {
    if (prevOrNext === 'next') {
      setCalendarMonth(10);
    } else {
      setCalendarMonth(9);
    }
    setActiveColor({ idx: null, active: false });
  };

  const handleCalendarBody = () => {
    for (let j = 0; j < startDay; j++) {
      arrDate.push({ date: null, enable: false });
    }
    for (let i = 1; i <= lastDate; i++) {
      if (calendarMonth > currentDate.getMonth()) {
        if (calendarMonth === 9 && i !== 30) {
          arrDate.push({ date: i, enable: false });
        } else if (calendarMonth === 10) {
          if (currentDate.getMonth() === 9 && currentDate.getDate() > i) {
            arrDate.push({ date: i, enable: false });
          } else if (i < 6) {
            arrDate.push({ date: i, enable: true });
          } else {
            arrDate.push({ date: i, enable: false });
          }
        } else {
          arrDate.push({ date: i, enable: true });
        }
      } else {
        arrDate.push({ date: i, enable: false });
      }
    }

    return arrDate;
  };

  const handleChangeDate = (idx, date) => {
    setActiveColor({ idx: idx, active: true });
    setReservationInfo({
      ...reservationInfo,
      month: calendarMonth,
      date: date,
    });
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
              style={!el.enable ? { color: '#C5C5C5' } : { color: 'black' }}
              onClick={() => handleChangeDate(idx, el.date)}
              disabled={!el.enable}
            >
              <span
                style={
                  activeColor.idx === idx && el.enable
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
