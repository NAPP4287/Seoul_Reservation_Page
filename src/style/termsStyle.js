import styled from 'styled-components';

export const TermsWrap = styled.ul`
  padding: 20px 0 20px 0;
  > li {
    text-align: left;
    line-height: 10px;
    padding: 10px 20px;
    display: flex;
    align-items: center;
    border: 1px solid #c5c5c5;
    padding-left: 10px;
    margin-top: 10px;
    font-size: 13px;
    border-radius: 5px;
    > label {
      display: block;
      margin-left: 10px;
      width: 100%;
      padding: 10px 0;
      text-decoration: underline;
      line-height: 22px;
    }
    > input[type='checkbox'] {
      width: 20px;
      height: 20px;
      border-bottom: 3px;
      outline: none;
    }
    input[type='checkbox']:checked {
      accent-color: white;
      outline: 1px solid black;
    }
  }
  > li:nth-child(1) {
    margin-top: 0;
  }
  > li:nth-child(1) > label {
    text-decoration: none;
  }
`;

export const termsDetailWrap = styled.div`
  width: 375px;
  height: 100vh;
  position: fixed;
`;
