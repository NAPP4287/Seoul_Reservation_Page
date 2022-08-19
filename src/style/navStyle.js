import styled from 'styled-components';
import downArrow from '../assets/downArrow.png';
import smallDownArrow from '../assets/smallDownArrow.png';
import whiteSmallArrow from '../assets/whiteSmallArrow.png';
import whiteArrow from '../assets/whiteBack.png';

export const NavWrap = styled.div`
  height: 80px;
  position: fixed;
  max-width: 1920px;
  width: 100%;
  left: 50%;
  transform: translate(-50%);
  z-index: 999;
  background-color: white;
  border-bottom: 1px solid #dcdcdc;
  .navPadding {
    padding: 0 20px;
    height: 80px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  > div {
    height: 80px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

export const NoneBackNavWrap = styled.div`
  height: 80px;
  position: fixed;
  max-width: 1920px;
  width: 100%;
  left: 50%;
  transform: translate(-50%);
  z-index: 999;
  .navPadding {
    /* padding: 0 20px; */
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
  background-color: transparent;
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
  > .whiteDown {
    width: 20px;
    height: 20px;
    background: url(${whiteSmallArrow}) no-repeat center;
    transform: rotate(90deg);
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

export const WhiteBackPageBtn = styled.div`
  font-size: 25px;
  > div {
    width: 20px;
    height: 20px;
    background: url(${whiteArrow}) no-repeat center;
  }
`;

export const LanguageWrap = styled.div`
  position: fixed;
  z-index: 999;
  max-width: 1920px;
  width: 100%;
  margin: 0 auto;
  left: 50%;
  top: 65px;
  transform: translate(-50%);
  padding: 0 20px;
  > ul {
    background-color: #f2f2f2;
    border-radius: 5px;
    right: 20px;
    float: right;
    > li {
      padding: 10px 20px;
      font-size: 14px;
    }
    > li:nth-child(2n) {
      background-color: white;
    }
    > li:nth-child(4) {
      border-radius: 0 0 5px 5px;
    }
  }
`;

export const LanguageBoxWrap = styled.div`
  max-width: 1024px;
  height: 200px;
  background-color: pink;
  z-index: 99999;
  margin: 0 auto;
  position: absolute;
`;
