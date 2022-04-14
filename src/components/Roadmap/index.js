import React from "react";
import "./Roadmap.css";
import {
  RoadmapContainer,
  RMTitleContainer,
  RMH1,
  RMH2,
  RMSpan,
  RMTable,
  ImgPolaroid,
  RMCellContent,
  RMp,
  RMCellCenter,
  RMCellEmpty,
  RMCellVerticalDivisor,
} from "./roadmapElements";
import images from "./RoadmapImages";
//import polaroid from "../../images/Roadmap/polaroidFrame.png";
//import styled from "styled-components";

const Roadmap = () => {
  return (
    <RoadmapContainer id="roadmap">
      <RMTitleContainer>
        <RMH1>Our Roadmap...</RMH1>
        <RMH2>
          ...for world <RMSpan>DOMINATION</RMSpan>
        </RMH2>
      </RMTitleContainer>
      <div className="RMCont">
        <RMTable>
          <RMCellContent>
            <div className="TextContent">
              <h3 className="LMtitle">Step ONE:</h3>
              <RMp>
                Launch a collection of 5,000 companion NFTs that will be
                utilised within the W.O.R.S.T. story. These companions will be
                completely free and will be beneficial as we move into Chapter 2
                staking, artefacts, and aliens.
              </RMp>
            </div>
          </RMCellContent>

          <RMCellCenter></RMCellCenter>
          <RMCellEmpty>
            <img src={images[0]} className="Imagenes foto1" />
          </RMCellEmpty>

          <RMCellVerticalDivisor></RMCellVerticalDivisor>

          <RMCellEmpty>
            <img src={images[1]} className="Imagenes foto2" />
          </RMCellEmpty>
          <RMCellCenter></RMCellCenter>
          <RMCellContent>
            <div className="TextContent">
              <h3 className="LMtitle">Step TWO:</h3>
              <RMp>
                Launch a collection of 5,000 companion NFTs that will be
                utilised within the W.O.R.S.T. story. These companions will be
                completely free and will be beneficial as we move into Chapter 2
                staking, artefacts, and aliens.
              </RMp>
            </div>
          </RMCellContent>

          <RMCellVerticalDivisor></RMCellVerticalDivisor>

          <RMCellContent>
            <div className="TextContent">
              <h3 className="LMtitle">Step THREE:</h3>
              <RMp>
                Launch a collection of 5,000 companion NFTs that will be
                utilised within the W.O.R.S.T. story. These companions will be
                completely free and will be beneficial as we move into Chapter 2
                staking, artefacts, and aliens.
              </RMp>
            </div>
          </RMCellContent>
          <RMCellCenter></RMCellCenter>
          <RMCellEmpty>
            <img src={images[2]} className="Imagenes foto3" />
          </RMCellEmpty>

          <RMCellVerticalDivisor></RMCellVerticalDivisor>

          <RMCellEmpty>
            <img src={images[3]} className="Imagenes foto4" />
          </RMCellEmpty>
          <RMCellCenter></RMCellCenter>
          <RMCellContent>
            <div className="TextContent">
              <h3 className="LMtitle">Step FOUR:</h3>
              <RMp>
                Launch a collection of 5,000 companion NFTs that will be
                utilised within the W.O.R.S.T. story. These companions will be
                completely free and will be beneficial as we move into Chapter 2
                staking, artefacts, and aliens.
              </RMp>
            </div>
          </RMCellContent>

          <RMCellVerticalDivisor></RMCellVerticalDivisor>
        </RMTable>
      </div>
    </RoadmapContainer>
  );
};

export default Roadmap;
