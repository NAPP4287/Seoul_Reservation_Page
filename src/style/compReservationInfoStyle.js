import styled from 'styled-components';

export const CompWrap = styled.div`
  padding: 110px 0 20px 0;
  > .titleWrap {
    padding-bottom: 40px;
    > .confirmHead {
      font-size: 20px;
      font-weight: bold;
    }
    > .reservationNum {
      font-size: 14px;
      padding-top: 10px;
    }
  }
`;

export const ReservationBox = styled.div`
  background-color: #f4f4f4;
  padding: 0 20px 0 20px;
  text-align: left;
`;

export const PersonCountWrap = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 20px;
  > div {
    color: #8c8c8c;
    font-size: 15px;
  }
`;

export const UserInfoWrap = styled.div`
  > ul {
    padding-top: 20px;
    > li {
      padding-bottom: 20px;
      > .type {
        color: #8c8c8c;
        font-size: 15px;
        padding-bottom: 10px;
      }
      > p {
        font-size: 14px;
        > span {
          margin-right: 10px;
        }
      }
    }
  }
`;
