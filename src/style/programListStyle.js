import styled from 'styled-components';

export const ProgramListWrap = styled.ul`
  padding: 110px 0 20px 0;
  > li {
    background-color: white;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.16);
    border-radius: 3px;
    height: 143px;
    margin-top: 20px;
    padding: 0 20px 15px 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    > h3 {
      text-align: left;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    > span {
      width: 100%;
      text-align: left;
      font-size: 12px;
    }
  }
  > li:nth-child(1) {
    margin-top: 0;
  }
`;

export const BottomContent = styled.div`
  display: flex;
  justify-content: space-between;
  > span {
    font-size: 12px;
    height: 30px;
    line-height: 50px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  > button {
    background-color: black;
    color: white;
    width: 100px;
    height: 35px;
    border: none;
    border-radius: 3px;
    font-size: 12px;
  }
`;
