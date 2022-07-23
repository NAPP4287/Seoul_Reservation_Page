import styled from 'styled-components';
import backgroundImg from '../example.jpg';

export const LandingWrap = styled.div`
  height: 100vh;
  width: 100%;
  background-color: black;
  max-width: 375px;
`;

export const LandingImg = styled.div`
  width: 100%;
  height: 100vh;
  background-color: oldlace;
  background-image: url(${backgroundImg});
  background-size: cover;
  opacity: 0.5;
`;

export const LandingTitle = styled.div`
  font-size: 2.5rem;
  font-weight: bold;
  color: white;
  width: 100%;
  max-width: 375px;
  padding-bottom: 80px;
`;

export const ButtonWrap = styled.div`
  > a {
    display: block;
    > button {
      width: 100%;
      height: 50px;
      background-color: white;
      border: none;
      border-radius: 2px;
      /* font-weight: bold; */
      // font-weight 굵기 어떻게 할건지
    }
  }
  > a:nth-child(2) {
    margin-top: 25px;
  }
`;

export const LandingContent = styled.div`
  max-width: 375px;
  width: 100%;
  padding: 0 20px;
  position: absolute;
  top: 50%;
  transform: translate(0, -50%);
  > a {
    color: white;
    font-size: 12px;
    cursor: pointer;
    text-decoration: underline;
    margin-top: 30px;
    display: block;
  }
`;
