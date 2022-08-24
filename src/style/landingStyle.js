import styled from 'styled-components';
import backgroundImg from '../assets/example.jpg';

export const LandingWrap = styled.div`
  height: 100%;
  width: 100%;
  max-width: 1920px;
`;

export const LandingImg = styled.div`
  width: 100%;
  min-height: 100vh;
  height: 100%;
  background-image: url(${backgroundImg});
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LandingTitle = styled.div`
  font-size: 60px;
  font-weight: bold;
  color: white;
  padding-bottom: 50px;
  @media (max-width: 500px) {
    font-size: 40px;
  }
`;

export const ButtonWrap = styled.div`
  display: flex;
  > button {
    width: 100%;
    height: 120px;
    background-color: white;
    border: none;
    border-radius: 8px;
    font-weight: bold;
    font-size: 20px;
  }
  > button:nth-child(2) {
    margin-left: 25px;
    margin-top: 0;
  }
  @media (max-width: 500px) {
    display: block;
    > button {
      height: 50px;
      font-size: 1rem;
      border-radius: 3px;
    }
    > button:nth-child(2) {
      margin-left: 0;
      margin-top: 25px;
    }
  }
`;

export const LandingContent = styled.div`
  max-width: 1920px;
  width: 100%;
  padding: 0 126px;
  max-width: 772px;
  /* margin-top: 150px;
  margin-bottom: 150px; */
  display: flex;
  flex-direction: column;
  > a {
    color: white;
    font-size: 16px;
    cursor: pointer;
    text-decoration: underline;
    margin-top: 30px;
    display: block;
    /* padding-bottom: 40px; */
  }

  @media (max-width: 500px) {
    padding: 0 20px;
    > a{
      font-size: 12px;
    }
`;
