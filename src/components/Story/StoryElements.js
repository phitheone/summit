import styled, { keyframes } from "styled-components";

export const StoryContainer = styled.div`
  background: #060300;
  display: flex;
  padding: 0 30px;
  width: 85%;
  margin-left: auto;
  margin-right: auto;
  height: auto;
  //max-width: 1500px;
  position: relative;
  overflow: hidden;
  z-index: 1;

  @media screen and (max-width: 768px) {
    width: 100%;
    //margin-left: 20px;
    //margin-right: 20px;
  }
  /* background: #060300;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
  width: 85%;
  margin-left: auto;
  margin-right: auto;
  height: auto;
  //max-width: 1500px;
  position: relative;
  z-index: 1; */
`;

export const StoryTextContainer = styled.div`
  //max-width: 700px;
  position: relative;
  padding: 8px 24px;
  display: flex;
  flex: 1;
  //grid-auto-columns: minmax(auto, 1fr);
  flex-direction: column;
  align-items: center;
  z-index: 50;
  overflow: hidden;
  background: rgba(0, 0, 0, 0.7);
  //background-image: linear-gradient(90deg, transparent, #000);
  //border: 5px solid #fff;

  @media screen and (max-width: 768px) {
    padding: 8px 8px;
  }
`;

export const StoryTitle = styled.h1`
  position: relative;
  margin-top: 10px;
  margin-bottom: 20px;
  //color: #fca102;
  font-size: 45px;
  text-align: left;
  max-width: 600px;
  color: #999;

  @media screen and (max-width: 768px) {
    font-size: 40px;
  }
`;

export const SSpan = styled.span`
  position: relative;
  color: #fca102;
`;

export const StoryP = styled.p`
  position: relative;
  margin-top: 0px;
  margin-bottom: 20px;
  color: #ccc;
  font-size: 1.8rem;
  text-align: justify;
  max-width: 600px;

  @media screen and (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

export const StoryMeme = styled.div`
  width: 100%;
  //height: 100%;
  //max-width: 700px;
  position: relative;

  padding: 8px 24px;
  display: flex;
  flex: 1;
  align-content: center;
  justify-content: center;
  //grid-auto-columns: minmax(auto, 1fr);
  overflow: hidden;

  //border: 5px solid #fff;

  @media screen and (max-width: 1400px) {
    position: absolute;
    transform: translateX(190px);
    height: 100%;
    //width: 100%;
    bottom: 0;
    overflow: hidden;
  }
`;

const kfsetSpiralRot = keyframes`
0%{
    transform: rotate(0deg) scale(70%);
}
50%{
    transform: rotate(-180deg) scale(100%);
}
100%{
    transform: rotate(-360deg) scale(70%);
}
`;

const kfsetLagarto = keyframes`
0%,60%,100%{
    transform: rotate(-40deg) translateX(30px)  translateY(-40px);
}
10%, 40%{
    transform: rotate(-40deg) translateX(30px)  translateY(-160px);
}
35%, 37%,39%{
    transform: rotate(-40deg) translateX(35px)  translateY(-160px);
}
36%, 38%{
    transform: rotate(-40deg) translateX(25px)  translateY(-160px);
}
`;

export const SMBg = styled.img`
  z-index: 6;

  //top: 100%;
  bottom: 17%;
  max-width: 700px;
  //height: 700px;
  position: absolute;
  margin: auto;

  //border: 5px solid #0f0;
`;
export const SMPyramid = styled.img`
  z-index: 8;
  bottom: 17%;
  max-width: 700px;
  position: absolute;

  //border: 5px solid #00f;
`;
export const SMIluminati = styled.img`
  z-index: 7;
  max-width: 700px;
  bottom: 23%;
  //transform: rotate(-40deg) translateX(30px)  translateY(-160px);
  position: absolute;
  animation: ${kfsetLagarto} 8s linear infinite;

  //border: 5px solid #f00;
`;

export const SMSpiral = styled.img`
  z-index: 5;
  max-width: 600px;
  bottom: 13%;
  position: absolute;
  animation: ${kfsetSpiralRot} 10s linear infinite;

  //border: 5px solid aquamarine;
`;
