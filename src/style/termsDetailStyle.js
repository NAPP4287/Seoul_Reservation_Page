import styled from 'styled-components';

export const CloseWrap = styled.div`
  height: 80px;
  position: fixed;
  width: 100%;
  padding: 0 20px;
  z-index: 999;
  border-bottom: 1px solid #a6a6aa;
  display: flex;
  align-items: center;
  background-color: white;
`;

export const TermsDetailBox = styled.div`
  padding-top: 100px;
  text-align: left;
  font-size: 13px;
  > div {
    font-weight: bold;
    padding-bottom: 10px;
  }
`;
