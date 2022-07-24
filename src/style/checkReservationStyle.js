import styled from 'styled-components';
import downArrow from '../assets/downArrow.png';
import smallDownArrow from '../assets/smallDownArrow.png';

export const ChkResWrap = styled.div`
  padding: 100px 20px 10px 20px;
  text-align: left;
  height: 100vh;
  > button {
    position: absolute;
    bottom: 20px;
    width: calc(100% - 40px);
    max-width: 375px;
    height: 40px;
    border: none;
    background-color: #ebebeb;
    border-radius
  }
`;

export const ChkTitleWrap = styled.div`
  > h3 {
    padding-bottom: 10px;
    border-bottom: 1px solid black;
    font-size: 15px;
  }
`;

export const ChkBodyWrap = styled.div`
  margin-bottom: 15px;
  > p {
    color: #8c8c8c;
    font-size: 13px;
    padding-bottom: 7px;
  }
  > input {
    width: calc(100% - 6px);
    height: 40px;
    border-radius: 3px;
    border: 1px solid #8c8c8c;
    padding: 0 5px;
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
      height: 40px;
      margin-left: 10px;
      background-color: #d9d9d9;
      font-size: 11px;
      border: none;
      border-radius: 3px;
    }
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
    max-width: 335px;
    background-color: white;
    position: absolute;
    border: 1px solid #8c8c8c;
    border-radius: 3px;
    > li {
      height: 45px;
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
    height: 40px;
    line-height: 40px;
    padding: 0 5px;
    font-size: 13px;
    border-radius: 3px;
    border: 1px solid #8c8c8c;
  }
  > .list-member {
    width: 100px;
    background-color: white;
    position: absolute;
    border: 1px solid #8c8c8c;
    border-radius: 3px;
    > li {
      height: 45px;
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
