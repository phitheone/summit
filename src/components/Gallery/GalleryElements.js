import styled, { keyframes } from "styled-components";

export const GallerySeparator = styled.div`
  margin-bottom: 2rem;
`;

export const GalleryContainer = styled.div`
  background: #003010;
  background-image: linear-gradient(
    #000,
    #000,
    #003010,
    #003010,
    #003010,
    #003010,
    #003010,
    #003010,
    #003010,
    #000
  );
  padding: 2rem;
  //border: 5px #0f0 solid;
  position: relative;
  display: flex;
  justify-content: center;
  align-content: center;
  flex-direction: column;
`;

export const GalleryTitleContainer = styled.div`
  //width: 80%;
  display: flex;
  justify-content: center;
  //position: relative;
  //border: 5px #f00 solid;
`;

const kfsetLetterShine = keyframes`
0%{
  background-position: -500%;
}
100%{
  background-position: 500%;
}
`;

export const GalleryH1 = styled.h1`
  margin-top: 10px;
  margin-bottom: 15px;
  color: #fca102;
  text-align: center;
  font-size: 4rem;
  font-weight: bolder;
  //font-family: "Faustina", serif;

  background: linear-gradient(90deg, transparent, #0f0, transparent);
  background-repeat: no-repeat;
  background-size: 80%;
  animation: ${kfsetLetterShine} 3s linear infinite;

  -webkit-text-fill-color: transparent;
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-stroke: 0.03rem;

  @media screen and (max-width: 768px) {
    font-size: 3rem;
    -webkit-text-stroke: 0.01rem;
  }
`;

export const GallerySpan = styled.span`
  color: green;
`;

export const GallerySwiperContainer = styled.div`
  //background: #003010;
  padding: 2rem;
  //border: 5px #00f solid;
  //display: flex;
  //position: relative;
`;

export const SwiperImg = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 2rem;
`;
