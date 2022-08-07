import styled from 'styled-components';

export const ChkResWrap = styled.div`
  padding: 110px 140px 10px 140px;
  text-align: left;
  height: 100vh;
  > button {
    position: absolute;
    bottom: 20px;
    height: 50px;
    border: none;
    width: (100% - 280px);
    left: 50%;
    transform: translate(-50%);
  }
  @media (max-width: 500px) {
    padding: 110px 20px 10px 20px;
  }
`;

export const ChkTitleWrap = styled.div`
  > h3 {
    padding-bottom: 10px;
    border-bottom: 1px solid black;
    font-size: 15px;
  }
`;
