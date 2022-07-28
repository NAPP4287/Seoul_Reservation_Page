import styled from 'styled-components';

export const ReservationListWrap = styled.div`
  padding: 110px 0 20px 0;
`;

export const ListBox = styled.ul`
  > a {
    text-decoration: none;
    color: black;
    > li {
      background-color: white;
      border-radius: 3px;
      height: 143px;
      margin-top: 20px;
      padding: 0 20px 15px 20px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.16);
      > h3 {
        text-align: left;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }
      > span {
        text-align: left;
        font-weight: 500;
      }
    }
  }
`;
