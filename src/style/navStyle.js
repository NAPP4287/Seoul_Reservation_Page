import styled from 'styled-components';

export const NavWrap = styled.div`
  height: 80px;
  position: fixed;
  width: 100%;
  padding: 0 20px;
  z-index: 999;
  .backNav {
    border-bottom: 1px solid #dcdcdc;
  }
  > div {
    height: 80px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    > .btnColor {
      background-color: black;
      color: white;
    }
  }
`;

export const GlobalWrap = styled.div`
  color: black;
  font-size: 12px;
  padding: 0 20px;
  background-color: white;
  height: 30px;
  line-height: 30px;
  border-radius: 30px;
`;

export const BackPageBtn = styled.div`
  font-size: 25px;
`;
