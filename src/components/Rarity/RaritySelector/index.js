import React from "react";
import {
  SelectorContainer,
  TitlesContainer,
  RarityH1,
  RarityH2,
  Rspan,
  LinksContainer,
  ScrollLinkContainer,
  ScrollingLink,
  GifRoulette,
  GifName,
} from "./RaritySelectorElements";
import randomGif from "../../../images/General/lizzard.gif";

const RaritySelector = () => {
  return (
    <>
      <SelectorContainer id="rarityHero">
        <TitlesContainer>
          <RarityH1>Rarity Chart</RarityH1>
          <RarityH2>
            <Rspan>click</Rspan> on trait to navigate
          </RarityH2>
        </TitlesContainer>
        <LinksContainer>
          <ScrollLinkContainer>
            <ScrollingLink
              to="cat1"
              smooth="true"
              duration="500"
              spy={true}
              exact="true"
              offset={-80}
            >
              <GifRoulette src={randomGif} alt="" />
              <GifName>Atributo1</GifName>
            </ScrollingLink>
          </ScrollLinkContainer>
          <ScrollLinkContainer>
            <ScrollingLink
              to="cat2"
              smooth="true"
              duration="500"
              spy={true}
              exact="true"
              offset={-80}
            >
              <GifRoulette src={randomGif} alt="" />
              <GifName>Atributo2</GifName>
            </ScrollingLink>
          </ScrollLinkContainer>
          <ScrollLinkContainer>
            <ScrollingLink
              to="cat3"
              smooth="true"
              duration="500"
              spy={true}
              exact="true"
              offset={-80}
            >
              <GifRoulette src={randomGif} alt="" />
              <GifName>Atributo3</GifName>
            </ScrollingLink>
          </ScrollLinkContainer>
          <ScrollLinkContainer>
            <ScrollingLink
              to="cat4"
              smooth="true"
              duration="500"
              spy={true}
              exact="true"
              offset={-80}
            >
              <GifRoulette src={randomGif} alt="" />
              <GifName>Atributo4</GifName>
            </ScrollingLink>
          </ScrollLinkContainer>
          <ScrollLinkContainer>
            <ScrollingLink
              to="cat5"
              smooth="true"
              duration="500"
              spy={true}
              exact="true"
              offset={-80}
            >
              <GifRoulette src={randomGif} alt="" />
              <GifName>Atributo5</GifName>
            </ScrollingLink>
          </ScrollLinkContainer>
          <ScrollLinkContainer>
            <ScrollingLink
              to="cat6"
              smooth="true"
              duration="500"
              spy={true}
              exact="true"
              offset={-80}
            >
              <GifRoulette src={randomGif} alt="" />
              <GifName>Atributo6</GifName>
            </ScrollingLink>
          </ScrollLinkContainer>
        </LinksContainer>
      </SelectorContainer>
    </>
  );
};

export default RaritySelector;
