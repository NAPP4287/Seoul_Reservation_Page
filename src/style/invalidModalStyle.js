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
  > .certModalBox {
    width: calc(100% - 40px);
    height: 200px;
    max-width: 375px;
    padding: 60px 20px 0 20px;
    background-color: white;
    > .title {
      padding-bottom: 50px;
    }
    > button {
      width: 100%;
      height: 50px;
      background-color: black;
      color: white;
      border: none;
      border-radius: 5px;
    }
  }
  > .modalBox {
    width: calc(100% - 40px);
    max-width: 375px;
    padding: 60px 0 0 0;
    background-color: white;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    > .title {
      padding-bottom: 50px;
    }
    > button {
      width: 100%;
      height: 50px;
      border: none;
      background-color: #f5f5f7;
      margin: 0 auto;
    }
    > .btnWrap {
      display: flex;
      margin: 0 auto;
      background-color: red;
      width: 100%;
      > button {
        width: 50%;
        height: 50px;
        border: none;
        background-color: #f5f5f7;
      }
      > button:nth-child(1) {
        border-right: 1px solid #ebebeb;
      }
    }
  }
`;
