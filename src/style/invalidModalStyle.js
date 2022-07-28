import styled from 'styled-components';

export const ModalBack = styled.div`
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  z-index: 99999;
  display: flex;
  justify-content: center;
  align-items: center;
  > .modalBox {
    width: calc(100% - 40px);
    height: 200px;
    padding: 40px 0;
    background-color: white;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    > .title {
      padding-bottom: 30px;
    }
    > button {
      width: calc(100% - 40px);
      height: 40px;
      border-radius: 3px;
      border: none;
      background-color: black;
      color: white;
      margin: 0 auto;
    }
    > .btnWrap {
      display: flex;
      width: calc(100% - 40px);
      margin: 0 auto;
      > button {
        width: 50%;
        height: 50px;
        margin-left: 10px;
        border-radius: 5px;
        border: 1px solid black;
        background-color: white;
      }
      > button:nth-child(1) {
        margin-left: 0;
        background-color: black;
        color: white;
        border: none;
      }
    }
  }
`;
