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
import { saveEctInfo, getEctInfo } from '../redux/reservation/reservationEct';
import { useDispatch, useSelector } from 'react-redux';
import { filterLanguage } from '../common/filterLanguage';

function CalendarComp({
  setReservationInfo,
  reservationInfo,
  queryIdx,
  setTicketList,
  setItemIdx,
  langType,
  setActiveTimeBtn,
}) {
  const [calendarMonth, setCalendarMonth] = useState(9);
  const [activeColor, setActiveColor] = useState({
    idx: null,
    active: false,
  });
  const [dateArr, setDateArr] = useState([]);
  const date = ['Sun', 'Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat'];
  const lastDate = new Date(2022, calendarMonth, 0).getDate();
  const startDay = new Date(2022, calendarMonth - 1).getDay();
  const currentDate = new Date();
  const params = { lang: langType };

  let arrDate = [];

  const dispatch = useDispatch();
  const ectInfo = useSelector(getEctInfo);

  const getDate = (month) => {
    if (calendarMonth < 10) {
      customAxios
        .get(`reservation/view/${queryIdx}/20220${month}`)
        .then((r) => {
          setDateArr([...r.data.dateList]);
        });
    } else {
      customAxios.get(`reservation/view/${queryIdx}/2022${month}`).then((r) => {
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
    setItemIdx(null);
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

  const handleChangeDate = (idx, selectDate, itemIdx) => {
    setActiveColor({ idx: idx, active: true });
    setItemIdx(itemIdx);
    customAxios
      .get(`/reservation/date/${queryIdx}/${itemIdx}`, { params: params })
      .then((r) => {
        setTicketList([...r.data.ticketList]);
        setActiveTimeBtn({ idx: null, active: false });
      })
      .catch((e) => console.log(e));

    const week = date[new Date(2022, calendarMonth - 1, selectDate).getDay()];

    dispatch(
      saveEctInfo({
        ...ectInfo,
        week: week,
        date: selectDate,
        month: calendarMonth,
      })
    );
  };

  handleCalendarBody();

  return (
    <div className='contentWrap'>
      <CalendarWrap>
        <div className='headTitle'>
          {filterLanguage('selectDateTitle', langType)}
        </div>

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
            <span className='possible'></span>
            {filterLanguage('reservationAvailable', langType)}
          </div>
          <div>
            <span className='impossible'></span>
            {filterLanguage('reservationNotAvailble', langType)}
          </div>
        </CalendarEnd>
      </CalendarWrap>
    </div>
  );
}

export default CalendarComp;
