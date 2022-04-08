import styled from "styled-components";
//import polaroid from "../../images/Roadmap/polaroidFrame.png";

export const RoadmapContainer = styled.div`
  //background: #9b6403;
  background-image: linear-gradient(
    #000,
    #000,
    #9b6403,
    #9b6403,
    #9b6403,
    #9b6403,
    #9b6403,
    #9b6403,
    #9b6403,
    #9b6403,
    #9b6403,
    #9b6403,
    #000
  );
  padding: 2rem;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  align-content: space-between;
  height: auto;

  //border: 5px #0f0 solid;
`;

export const RMTitleContainer = styled.div`
  width: 100%;

  //border: 5px #f00 solid;
`;

export const RMH1 = styled.h1`
  text-align: center;
  margin-top: 30px;
  font-size: 8rem;
  color: #46a219;
  top: 0;
  //border: 5px #ff0 solid;

  @media screen and (max-width: 768px) {
    font-size: 4rem;
  }
`;
export const RMH2 = styled.h2`
  text-align: center;
  font-size: 4rem;
  color: #bbb;
  margin-bottom: 2rem;
  //border: 5px #00f solid;

  @media screen and (max-width: 768px) {
    font-size: 2rem;
  }
  //-webkit-text-fill-color: 46a219;
  //background-clip: text;
  //-webkit-background-clip: text;
  //-webkit-text-stroke: 1px;
`;

export const RMSpan = styled.span`
  text-align: center;
  font-size: 5rem;
  color: #0f0;

  @media screen and (max-width: 768px) {
    font-size: 2rem;
  }
`;

export const RMTable = styled.div`
  //margin: 3rem;
  //margin-right: 5rem;
  width: 100%;
  display: grid;
  grid-template-columns: 5fr 5fr;
  //margin-bottom: 4rem;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }

  //border: 5px #00f solid;
`;
/*
const HandleLandMark = (lm) => {
  switch (lm) {
    case "lm1":
      return "background: #000; color: #aaa;";
    case "lm2":
      return "background: #0f0; color: #f00;";
    case "lm3":
      return "background: #f00; color: #0f0;";
    case "lm4":
      return "background: #00f; color: #fff;";
    default:
      return "background: transparent;";
  }
};
*/

/*
  //${({ landMark }) => HandleLandMark(landMark)}
  */

export const RMCellContent = styled.div`
  width: 100%;
  height: 400px;
  //border-radius: 3rem;
  //background: #000;

  //background-image: linear-gradient(transparent, #000, transparent);

  @media screen and (max-width: 768px) {
    //border-radius: 2rem;
  }

  //border: 5px #f00 solid;
`;

/*
export const RMCellContent = styled.div`
  width: 100%;
  height: 400px;
  align-items: center;
  align-content: center;
  justify-items: center;
  justify-content: center;
  //border-radius: 3rem;
  //background: #000;

  @media screen and (max-width: 768px) {
    border-radius: 2rem;
  }

  border: 5px #f00 solid;
`;
*/
export const ImgPolaroid = styled.img`
  width: 60%;
  height: 400px;
`;

export const RMp = styled.p`
  font-family: "Grape Nuts", cursive;
  position: relative;
  margin-top: 0px;
  margin-bottom: 20px;
  color: #000;
  font-size: 1.8rem;
  text-align: justify;
  //max-width: 600px;

  @media screen and (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

export const RMCellCenter = styled.div`
  display: none;
  width: 100%;
  height: 400px;

  @media screen and (max-width: 768px) {
    display: none;
  }

  //border: 5px #0f0 solid;
`;

export const RMCellEmpty = styled.div`
  width: 100%;
  height: 400px;
  display: flex;
  align-items: center;
  justify-content: center;

  @media screen and (max-width: 768px) {
    //display: none;
    height: 220px;
  }

  //border: 5px #999 solid;
`;

export const RMCellVerticalDivisor = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    display: none;
    width: 100%;
    height: 100px;
  }

  //border: 5px #0f0 solid;
`;
