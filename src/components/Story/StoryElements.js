import styled, { keyframes } from "styled-components";

export const StoryContainer = styled.div`
  background: #060300;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  padding: 0 30px;
  height: 800px;
  max-width: 1500px;
  position: relative;
  z-index: 1;
`;

export const StoryTextContainer = styled.div`
  max-width: 700px;
  position: relative;
  padding: 8px 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  //border: 5px solid #fff;
`;

export const StoryTitle = styled.h1`
  position: relative;
  margin-top: 10px;
  //color: #fca102;
  font-size: 45px;
  text-align: left;
  max-width: 600px;
  color: #999;
`;

export const SSpan = styled.span`
  position: relative;
  color: #fca102;
`;

export const StoryP = styled.p`
  position: relative;
  margin-top: 30px;
  margin-bottom: 30px;
  //color: #fca102;
  font-size: 1.6rem;
  text-align: justify;
  max-width: 600px;
  color: #999;
`;

export const StoryMeme = styled.div`
  max-width: 700px;
  position: relative;
  padding: 8px 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  //border: 5px solid #fff;
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
  max-width: 700px;
  position: absolute;
`;
export const SMPyramid = styled.img`
  z-index: 8;
  max-width: 700px;
  position: absolute;
`;
export const SMIluminati = styled.img`
  z-index: 7;
  max-width: 700px;
  //transform: rotate(-40deg) translateX(30px)  translateY(-160px);
  position: absolute;
  animation: ${kfsetLagarto} 8s linear infinite;
`;

export const SMSpiral = styled.img`
  z-index: 5;
  max-width: 700px;
  position: absolute;
  animation: ${kfsetSpiralRot} 10s linear infinite;
`;
