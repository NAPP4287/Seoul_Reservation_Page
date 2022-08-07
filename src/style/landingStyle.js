import styled from 'styled-components';
import backgroundImg from '../assets/example.jpg';

export const LandingWrap = styled.div`
  height: 100vh;
  width: 100%;
  max-width: 1024px;
  background-color: black;
`;

export const LandingImg = styled.div`
  width: 100%;
  height: 100vh;
  background-image: url(${backgroundImg});
  background-size: cover;
  opacity: 0.5;
`;

export const LandingTitle = styled.div`
  font-size: 60px;
  font-weight: bold;
  color: white;
  padding-bottom: 150px;
  @media (max-width: 500px) {
    font-size: 40px;
  }
`;

export const ButtonWrap = styled.div`
  > button {
    width: 100%;
    height: 120px;
    background-color: white;
    border: none;
    border-radius: 8px;
    font-weight: bold;
    font-size: 24px;
  }
  > button:nth-child(2) {
    margin-left: 20px;
  }
  @media (max-width: 500px) {
    display: block;
    > button {
      height: 50px;
      font-size: 1rem;
      border-radius: 3px;
    }
  }
  > button:nth-child(2) {
    margin-left: 0;
    margin-top: 25px;
  }
`;

export const LandingContent = styled.div`
  max-width: 1024px;
  width: 100%;
  padding: 0 126px;
  position: absolute;
  top: 50%;
  transform: translate(0, -50%);
  > a {
    color: white;
    font-size: 16px;
    cursor: pointer;
    text-decoration: underline;
    margin-top: 30px;
    display: block;
  }

  @media (max-width: 500px) {
    padding: 0 20px;
    > a{
      font-size: 12px;
    }
`;
