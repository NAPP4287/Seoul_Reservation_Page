import styled from 'styled-components';

export const SelectTimeWrap = styled.div`
  padding-bottom: 20px;
  border-top: 1px solid black;
  > .timeTitle {
    padding: 20px 0;
    text-align: left;
    font-size: 16px;
    padding-bottom: 15px;
  }
`;

export const SelectTimeBox = styled.div`
  width: 100%;
  white-space: nowrap;
  overflow-x: auto;
  display: flex;
  > button {
    width: 120px;
    height: 60px;
    background-color: white;
    border-radius: 5px;
    border: 1px solid #c5c5c5;
    display: inline-block;
    margin-left: 10px;
    font-size: 14px;
    > span {
      display: block;
    }
  }
  > button:nth-child(1) {
    margin-left: 0;
  }
`;
