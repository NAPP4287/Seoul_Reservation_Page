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
      customAxios
        .get(`reservation/view/${queryIdx}/20220${month}`)
        .then((r) => {
          console.log('9', r);
          setDateArr([...r.data.dateList]);
        });
      // setDateArr([{ itemIdx: 1, itemDate: '2022.9.30', isType: 0 }]);
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
  };

  const handleCalendarBody = () => {
    for (let j = 0; j < startDay; j++) {
      arrDate.push({ date: null, itemIdx: 1, itemIdx: null });
    }

    for (let i = 1; i <= lastDate; i++) {
      const activeDate = dateArr.map((el) => Number(el.itemDate.split('.')[2]));
      const activeMonth = dateArr.map((el) =>
        Number(el.itemDate.split('.')[1])
      );

      if (activeMonth[0] === calendarMonth) {
        if (activeDate.includes(i)) {
          arrDate.push({ date: i, itemIdx: 0 });
        } else {
          arrDate.push({ date: i, itemIdx: 1 });
        }
      } else {
        arrDate.push({ date: i, itemIdx: 1 });
      }
    }
    return arrDate;
  };

  // const handleCalendarBody = () => {
  //   for (let j = 0; j < startDay; j++) {
  //     arrDate.push({ date: null, enable: false });
  //   }

  //   for (let i = 1; i <= lastDate; i++) {
  //     if (calendarMonth === 9 && i !== 30) {
  //       arrDate.push({ date: i, enable: false });
  //     } else if (calendarMonth === 10 && i > 5) {
  //       arrDate.push({ date: i, enable: false });
  //     } else {
  //       arrDate.push({ date: i, enable: true });
  //     }
  //   }

  //   // for (let i = 1; i <= lastDate; i++) {
  //   //   if (calendarMonth > currentDate.getMonth()) {
  //   //     if (calendarMonth === 9 && i !== 30) {
  //   //       arrDate.push({ date: i, enable: false });
  //   //     } else if (calendarMonth === 10) {
  //   //       if (currentDate.getMonth() === 9 && currentDate.getDate() > i) {
  //   //         arrDate.push({ date: i, enable: false });
  //   //       } else if (i < 6) {
  //   //         arrDate.push({ date: i, enable: true });
  //   //       } else {
  //   //         arrDate.push({ date: i, enable: false });
  //   //       }
  //   //     } else {
  //   //       arrDate.push({ date: i, enable: true });
  //   //     }
  //   //   } else {
  //   //     arrDate.push({ date: i, enable: false });
  //   //   }
  //   // }

  //   // return arrDate;
  // };

  const handleChangeDate = (idx, date) => {
    console.log(date, calendarMonth);
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
              style={
                el.itemIdx === 1 ? { color: '#C5C5C5' } : { color: 'black' }
              }
              onClick={() => handleChangeDate(idx, el.date)}
              disabled={el.itemIdx === 1}
            >
              <span
                style={
                  activeColor.idx === idx && el.itemIdx === 0
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
