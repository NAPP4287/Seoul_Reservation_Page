import styled from 'styled-components';
import downArrow from '../assets/downArrow.png';
import smallDownArrow from '../assets/smallDownArrow.png';

export const ChkBodyWrap = styled.div`
  margin-bottom: 15px;
  text-align: left;
  > p {
    color: #8c8c8c;
    font-size: 13px;
    padding-bottom: 7px;
  }
  > .inputDesc {
    padding-top: 5px;
  }
  > input {
    width: calc(100% - 6px);
    height: 55px;
    border-radius: 3px;
    border: 1px solid #8c8c8c;
    padding: 0 0 0 5px;
    @media (max-width: 500px) {
      height: 44px;
    }
  }
  > .countryWrap {
    display: flex;
    justify-content: space-between;
    > input {
      width: 100%;
      margin-left: 10px;
      border: 1px solid #8c8c8c;
      border-radius: 3px;
      padding: 0 5px;
    }
  }
  > .certWrap {
    display: flex;
    > input {
      width: 100%;
      border: 1px solid #8c8c8c;
      border-radius: 3px;
      padding: 0 5px;
    }
    > button {
      width: 90px;
      height: 55px;
      margin-left: 10px;
      background-color: #d9d9d9;
      font-size: 11px;
      border: none;
      border-radius: 3px;
      color: black;
      @media (max-width: 500px) {
        height: 44px;
      }
    }
    > .active {
      background-color: black;
      color: white;
    }
  }
  > button {
    width: 100%;
    height: 55px;
    margin-top: 10px;
    font-weight: bold;
    border: none;
    @media (max-width: 500px) {
      height: 44px;
    }
  }
  > .active {
    background-color: black;
    color: white;
    border-radius: 3px;
  }
  > span {
    padding: 10px 0;
    display: block;
    font-size: 12px;
    color: red;
  }
`;

export const LikeSelectBox = styled.div`
  > .selectType {
    width: 100%;
    height: 45px;
    line-height: 45px;
    text-align: left;
    padding: 0 5px;
    border-radius: 3px;
    border: 1px solid #8c8c8c;
    font-size: 13px;
    background: url(${downArrow}) no-repeat right 9px center;
    background-color: white;
    color: #c5c5c5;
    cursor: pointer;
  }
  > .list-member {
    width: calc(100% - 40px);
    background-color: white;
    position: absolute;
    border: 1px solid #8c8c8c;
    border-radius: 3px;
    > li {
      height: 48px;
      line-height: 45px;
      padding: 0 5px;
      font-size: 13px;
      cursor: pointer;
    }
    > li:hover {
      background: #f2f2f2;
    }
  }
`;

export const LikeCountrySelectBox = styled.div`
  > .selectType {
    width: 100px;
    background: url(${smallDownArrow}) no-repeat right 9px center;
    background-color: white;
    height: 55px;
    line-height: 55px;
    padding: 0 5px;
    font-size: 13px;
    border-radius: 3px;
    border: 1px solid #8c8c8c;
    @media (max-width: 500px) {
      height: 44px;
      line-height: 44px;
    }
  }
  > .ectCountry {
    display: flex;
    width: 100px;
    height: 55px;
    border: 1px solid #8c8c8c;
    line-height: 55px;
    margin-right: 10px;
    padding: 0 5px;
    border-radius: 3px;
    display: flex;
    align-items: center;
    justify-content: center;
    @media (max-width: 500px) {
      height: 44px;
    }
    > input {
      border: none;
      width: 60px;
      height: 18px;
      line-height: 18px;
      border-bottom: 1px solid black;
    }
  }
`;

export const CountryListWrap = styled.div`
  max-width: 1024px;
  width: 100%;
  min-height: 100vh;
  height: 100%;
  padding: 0 126px;
  left: 50%;
  transform: translate(-50%);
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  z-index: 9999;
  > .list-member {
    border-radius: 3px;
    position: absolute;
    width: 100%;
    left: 50%;
    transform: translate(-50%);
    bottom: 60px;
    padding: 0 126px;
    @media (max-width: 500px) {
      padding: 0 20px;
    }
    > li {
      background-color: white;
      height: 45px;
      line-height: 45px;
      padding: 0 5px;
      font-size: 13px;
      cursor: pointer;
      padding: 0 20px;
      border-bottom: 1px solid #8c8c8c;
    }
    > li:nth-child(1) {
      border-radius: 20px 20px 0 0;
    }
    > li:nth-child(5) {
      border-radius: 0 0 20px 20px;
    }
    > li:hover {
      background: #d9d9d9;
    }
  }
`;
