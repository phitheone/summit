import styled, { keyframes } from "styled-components";

export const HeroContainer = styled.div`
  background: #060300;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
  height: 800px;
  position: relative;
  z-index: 1;

  @media screen and (max-width: 768px) {
    height: 600px;
  }
`;

export const HeroBg = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

const kfset1 = keyframes`
    0%,100%{
        opacity: 0;
        transform: scale(100%);
    }
    5%{
        opacity: 0.5;
    }
    10%,100%{
        opacity: 0;
        transform: scale(102%);
    }
    
`;
const kfset2 = keyframes`
    25%,100%{
        opacity: 0;
        transform: scale(100%);
    }
    30%{
        opacity: 0.5;
    }
    35%,100%{
        opacity: 0;
        transform: scale(102%);
    }
    
`;
const kfset3 = keyframes`
    50%,75%,100%{
        opacity: 0;
        transform: scale(100%);
    }
    55%,80%{
        opacity: 0.5;
    }
    60%,95%,100%{
        opacity: 0;
        transform: scale(102%);
    }
    
`;
const kfset4 = keyframes`
    75%,100%{
        opacity: 0;
        transform: scale(100%);
    }
    80%{
        opacity: 0.5;
    }
    85%,100%{
        opacity: 0;
        transform: scale(102%);
    }
    
`;

export const AnimationBg1 = styled.img`
  //width: 100%;
  //height: 100%;
  opacity: 0;
  position: absolute;
  animation: ${kfset1} 20s ease-in-out infinite;
  //animation-delay: 1s;
`;

export const AnimationBg2 = styled.img`
  //width: 100%;
  //height: 100%;
  opacity: 0;
  position: absolute;
  animation: ${kfset2} 20s ease-in-out infinite;
  //animation-delay: 2s;
`;

export const AnimationBg3 = styled.img`
  //width: 100%;
  //height: 100%;
  opacity: 0;
  position: absolute;
  animation: ${kfset3} 20s ease-in-out infinite;
  //animation-delay: 3s;
`;

export const AnimationBg4 = styled.img`
  //width: 100%;
  //height: 100%;
  opacity: 0;
  position: absolute;
  animation: ${kfset4} 20s ease-in-out infinite;
  //animation-delay: 4s;
`;

export const HeroContent = styled.div`
  z-index: 3;
  max-width: 1000px;
  position: absolute;
  padding: 8px 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const kfsetBanner = keyframes`
0%, 100%{
    transform: scale(100%);
}
50%{
    transform: scale(105%);
}
`;

export const HeroBanner = styled.img`
  position: relative;
  width: 80%;
  animation: ${kfsetBanner} 3s ease-in-out infinite;
  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

export const HeroP = styled.p`
  margin-top: 10px;
  color: #fca102;
  font-size: 45px;
  text-align: center;
  max-width: 600px;

  @media screen and (max-width: 768px) {
    font-size: 35px;
  }

  @media screen and (max-width: 480px) {
    font-size: 24px;
  }
`;

export const HeroSpan = styled.span`
  margin-top: 10px;
  color: #0f0;
  font-size: 45px;
  text-align: left;
  max-width: 600px;

  @media screen and (max-width: 768px) {
    font-size: 35px;
  }

  @media screen and (max-width: 480px) {
    font-size: 24px;
  }
`;

export const HerobtnWrapper = styled.div`
  margin-top: 32px;
  display: flex;
  flex-direction: row;
  align-items: center;
  flex-wrap: wrap;
  gap: 12px;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;
