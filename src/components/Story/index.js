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
import { ButtonR } from "../ButtonElements";
import imgArena from "../../images/Story/meme-back.png";
import imgPiramide from "../../images/Story/meme-pyramid.png";
import imgIluminati from "../../images/Story/meme-lagarto.png";
import imgEspiral from "../../images/Story/meme-spiral.png";

const Story = () => {
  return (
    <StoryContainer id="lore">
      <StoryTextContainer>
        <StoryTitle>
          Our History is <SSpan>your</SSpan> History...
        </StoryTitle>
        <StoryP>
          We have been watching humanity since the beginning. Guiding it.
          Nurturing it. <SSpan>Controlling</SSpan> it. Ha! We even convinced you
          that dinosaurs are extinct. Well... they are, but that's besides the
          point.
        </StoryP>
        <StoryP>
          We’re the primary source of structure, order and fashion throughout
          history for all mankind. We rule from the shadows. We are powerful. We
          know everything... <br />
          ...and we are <SSpan>broke</SSpan>.
        </StoryP>
        <StoryP>
          Because of some definitely not wrong decisions in the stock market,
          that weren’t our own fault at all, now we face total bankruptcy.
        </StoryP>
        <StoryP>
          BUT! On the bright side of things you can help us recover our
          subjugation of... well, you. Please, don’t go away yet, because if you
          help us, you’ll be the proud owner of a{" "}
          <SSpan>
            World Ownership Reacquisition Share Trading (W.O.R.S.T.)
          </SSpan>{" "}
          plan share, with your own personal Summit Oversee... Advisor! <br />{" "}
          Make your <SSpan>W.O.R.S.T.</SSpan> purchase <SSpan>Today!</SSpan>
        </StoryP>
        <StoryP>
          But before you help us with our money problem, you might need to know
          more. You see, it all began with a <SSpan>whip...</SSpan>
        </StoryP>
        <ButtonR to="/summit/story">Learn More...</ButtonR>
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
