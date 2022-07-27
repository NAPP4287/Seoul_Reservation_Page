import styled from 'styled-components';

// export const PersonTicketWrap = styled.div`
//   width: calc(100% - 40px);
//   margin: 0 auto;
// `;

export const CountPersonWrap = styled.div`
  text-align: left;
  padding: 20px 0;
  > p {
    color: #8c8c8c;
  }
  > .personCountBtn {
    display: flex;
    justify-content: space-between;
    color: #8c8c8c;
  }
`;

export const ButtonWrap = styled.div`
  display: flex;
  > button {
    width: 25px;
    height: 25px;
    color: #c5c5c5;
    border: 1px solid #c5c5c5;
    font-size: 20px;
    line-height: 15px;
    border-radius: none;
  }
  > .minus {
    background-color: white;
  }
  > span {
    width: 30px;
    display: block;
    text-align: center;
    border-bottom: 1px solid #c5c5c5;
    border-top: 1px solid #c5c5c5;
    color: black;
  }
`;
