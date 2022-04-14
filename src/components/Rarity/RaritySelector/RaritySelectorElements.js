import styled from "styled-components";
import { Link as LinkS } from "react-scroll";

export const SelectorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-items: center;
  background-image: linear-gradient(#000, #000, #8850aa);

  //border: solid 1px #0f0;
`;

export const TitlesContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-items: center;
  margin-top: 7rem;
  margin-bottom: 9rem;

  //border: solid 1px #00f;
`;

export const RarityH1 = styled.h1`
  font-size: 5rem;
  color: #0f0;

  @media screen and (max-width: 768px) {
    font-size: 4rem;
  }
`;

export const RarityH2 = styled.h2`
  font-size: 3rem;
  color: #afa;

  @media screen and (max-width: 768px) {
    font-size: 2rem;
  }
`;

export const Rspan = styled.span`
  color: #fca102;
`;

export const LinksContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 80%;
  justify-content: space-around;
  flex-wrap: wrap;
  margin-bottom: 5rem;
  color: #afa;

  @media screen and (max-width: 768px) {
    width: 100%;
  }
  //border: solid 1px #fff;
`;

export const ScrollLinkContainer = styled.div`
  background: rgba(100, 100, 100, 0.5);
  margin-bottom: 1.5rem;

  //border: solid 1px #f00;
`;

export const ScrollingLink = styled(LinkS)`
  height: 100%;
  width: 100%;
  //background: rgba(255, 3, 3, 100);
  cursor: pointer;
  transition: 0.5s ease-in-out;

  &:hover {
    transition: 0.5s ease-in-out;
    color: #0f0;
  }
  //border: solid 5px #0f0;
`;

export const GifRoulette = styled.img`
  height: auto;
  max-width: 200px;
  border: solid 5px #0ff;
  background: #999;
  z-index: 10;
`;

export const GifName = styled.h3`
  margin: 4px;
  margin-left: 1rem;
  font-size: 2rem;
  z-index: 5;

  //border: solid 5px #0f0;
`;
