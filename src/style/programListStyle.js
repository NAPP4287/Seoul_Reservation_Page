import styled from 'styled-components';
import backgroundImg from '../assets/example.jpg';

export const BackImgWrap = styled.div`
  background-color: black;
  min-height: 100vh;
  height: 100%;
  max-width: 1024px;
  width: 100%;
  margin: 0 auto;
  > .backImg {
    min-height: 100vh;
    height: 100%;
    background-image: url(${backgroundImg});
    opacity: 0.5;
  }
`;

export const ProgramListWrap = styled.ul`
  position: absolute;
  top: 110px;
  padding: 0 126px;
  width: 100%;
  max-width: 1024px;
  left: 50%;
  transform: translate(-50%);
  @media (max-width: 500px) {
    padding: 0 20px;
  }
  > li {
    background-color: white;
    border-radius: 3px;
    height: 143px;
    margin-top: 20px;
    padding: 0 20px 15px 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.16);
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
