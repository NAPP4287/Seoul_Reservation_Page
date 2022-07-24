import styled from 'styled-components';
import downArrow from '../assets/downArrow.png';
import smallDownArrow from '../assets/smallDownArrow.png';

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
  display: flex;
  justify-content: center;
  align-items: center;
  > div {
    width: 10px;
    height: 10px;
    margin-left: 5px;
    background: url(${smallDownArrow}) no-repeat center;
  }
`;

export const BackPageBtn = styled.div`
  font-size: 25px;
  > div {
    width: 20px;
    height: 20px;
    background: url(${downArrow}) no-repeat center;
    transform: rotate(90deg);
  }
`;
