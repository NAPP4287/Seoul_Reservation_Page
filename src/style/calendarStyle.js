import styled from 'styled-components';

export const CalendarWrap = styled.div`
  width: calc(100% - 40px);
  margin: 0 auto;
  padding-bottom: 30px;
  border-bottom: 2px solid black;
  border-top: 2px solid black;
`;

export const MonthWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  > button {
    border: none;
    background-color: transparent;
    > div {
      width: 12px;
      height: 6px;
    }
    > img {
      width: 12px;
      height: 6px;
    }
  }
  > h3 {
    padding: 0 10px;
  }
  > .left {
    transform: rotate(90deg);
  }
  > .right {
    transform: rotate(-90deg);
  }
`;

export const CalendarHeader = styled.div`
  display: flex;
  font-size: 13px;
  justify-content: space-around;
  margin: 0 auto;
  > div {
    color: #8c8c8c;
  }
`;

export const CalendarBody = styled.div`
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  > button {
    width: calc(100% / 7);
    height: 40px;
    font-size: 13px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    background-color: white;
    > span {
      width: 30px;
      height: 30px;
      display: block;
      line-height: 30px;
      border-radius: 30px;
    }
  }
`;

export const CalendarEnd = styled.div`
  display: flex;
  justify-content: flex-end;
  padding-top: 15px;
  > div {
    font-size: 12px;
    padding-right: 10px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    > span {
      width: 10px;
      height: 10px;
      background-color: white;
      display: inline-block;
      margin-right: 4px;
    }
    > .possible {
      background-color: black;
    }
    > .end {
      background-color: #f23f6e;
    }
    > .impossible {
      background-color: #d9d9d9;
    }
  }
  > div:nth-child(3) {
    padding-right: 0;
  }
`;
