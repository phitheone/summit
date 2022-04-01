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
import { Button } from "../ButtonElements";

const HeroSection = () => {
  return (
    <HeroContainer>
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
          <Button>Join The Gang</Button>
          <Button>Buy on Magic Eden</Button>
        </HerobtnWrapper>
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;
