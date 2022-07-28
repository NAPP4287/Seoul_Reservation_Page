import styled from 'styled-components';

export const ConfirmReservationWrap = styled.div`
  padding: 110px 0 20px 0;
  > .confirmHead {
    font-size: 18px;
    font-weight: bold;
  }
  > .reservationNum {
    font-size: 14px;
    padding-top: 10px;
  }
`;

export const ConfirmHeadWrap = styled.div`
  border-bottom: 1px solid black;
  padding-bottom: 20px;
  > .confirmHead {
    font-size: 18px;
    font-weight: bold;
  }
  > .reservationNum {
    font-size: 14px;
    padding-top: 10px;
  }
`;

export const ReservationTime = styled.div`
  text-align: left;
  padding: 20px 0;
  > .date {
    font-weight: bold;
    font-size: 17px;
  }
  > .dateBottom {
    padding-top: 20px;
    display: flex;
    justify-content: space-between;
    color: #8c8c8c;
    font-size: 14px;
  }
`;

export const UserInfoWrap = styled.div`
  text-align: left;
  > ul {
    padding-top: 20px;
    > li {
      padding-bottom: 20px;
      > .type {
        color: #8c8c8c;
        font-size: 14px;
        padding-bottom: 10px;
      }
      > p {
        font-size: 13px;
        > span {
          margin-right: 10px;
        }
      }
    }
  }
`;

export const NotificationWrap = styled.div``;

export const NotificationCheck = styled.ul`
  padding: 20px 0 20px 0;
  > li {
    text-align: left;
    line-height: 10px;
    padding: 10px 20px;
    display: flex;
    align-items: center;
    border: 1px solid #c5c5c5;
    padding-left: 10px;
    font-size: 13px;
    border-radius: 5px;
    > label {
      display: block;
      margin-left: 10px;
      width: 100%;
      padding: 10px 0;
      text-decoration: underline;
    }
    > input[type='checkbox'] {
      width: 20px;
      height: 20px;
      border-bottom: 3px;
      outline: none;
    }
    input[type='checkbox']:checked {
      accent-color: white;
      outline: 1px solid black;
    }
  }
`;

export const NotificationBox = styled.div`
  text-align: left;
  font-size: 13px;
  padding: 20px;
  background-color: #f5f5f7;
`;
