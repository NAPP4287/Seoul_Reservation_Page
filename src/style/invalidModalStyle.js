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
    background-color: white;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    > div {
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
  }
`;
