import React from "react";
import img1 from "../../images/Hero/ojos-lagarto-1.png";
import img2 from "../../images/Hero/ojos-lagarto-2.png";
import img3 from "../../images/Hero/ojos-lagarto-3.png";
import img4 from "../../images/Hero/ojos-lagarto-muchos.png";
import imgSummit from "../../images/General/Summit-Title-recortado.png";
import {
  HeroContainer,
  HeroBg,
  AnimationBg1,
  AnimationBg2,
  AnimationBg3,
  AnimationBg4,
  HeroContent,
  HeroBanner,
  HeroP,
  HerobtnWrapper,
  HeroSpan,
} from "./HeroElements";
import { ButtonA, ButtonR } from "../ButtonElements";

const HeroSection = () => {
  return (
    <HeroContainer id="hero">
      <HeroBg>
        <AnimationBg1 src={img1} />
        <AnimationBg2 src={img2} />
        <AnimationBg3 src={img3} />
        <AnimationBg4 src={img4} />
      </HeroBg>
      <HeroContent>
        <HeroBanner src={imgSummit} />
        <HeroP>They Watch. They Conspire.</HeroP>
        <HeroP>
          But mostly, they have <HeroSpan>FUN!</HeroSpan>
        </HeroP>
        <HerobtnWrapper>
          <ButtonA href="https://discord.com/" target="_blank">
            Join The Gang
          </ButtonA>
          <ButtonA href="https://magiceden.io/" target="_blank">
            Buy on Magic Eden
          </ButtonA>
          <ButtonR to="/summit/rarity">TEMP: RARITY</ButtonR>
        </HerobtnWrapper>
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;
