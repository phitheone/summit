import React from "react";
import {
  StoryContainer,
  StoryMeme,
  StoryTextContainer,
  StoryTitle,
  StoryP,
  SSpan,
  SMBg,
  SMPyramid,
  SMIluminati,
  SMSpiral,
} from "./StoryElements";
import { Button } from "../ButtonElements";
import imgArena from "../../images/Story/meme-back.png";
import imgPiramide from "../../images/Story/meme-pyramid.png";
import imgIluminati from "../../images/Story/meme-lagarto.png";
import imgEspiral from "../../images/Story/meme-spiral.png";

const Story = () => {
  return (
    <StoryContainer>
      <StoryTextContainer>
        <StoryTitle>
          Our History is <SSpan>your</SSpan> History...
        </StoryTitle>
        <StoryP>
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don't look even slightly believable.
          If you are going to use a passage of Lorem Ipsum, you need to be sure
          there isn't anything embarrassing hidden in the middle of text. All
          the Lorem Ipsum generators on the Internet tend to repeat predefined
          chunks as necessary, making this the first true generator on the
          Internet. It uses a dictionary of over 200 Latin words, combined with
          a handful of model sentence structures, to generate Lorem Ipsum which
          looks reasonable. The generated Lorem Ipsum is therefore always free
          from repetition, injected humour, or non-characteristic words etc.
        </StoryP>
        <Button>Learn More...</Button>
      </StoryTextContainer>
      <StoryMeme>
        <SMBg src={imgArena} />
        <SMPyramid src={imgPiramide} />
        <SMIluminati src={imgIluminati} />
        <SMSpiral src={imgEspiral} />
      </StoryMeme>
    </StoryContainer>
  );
};

export default Story;
