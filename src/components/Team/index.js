import React from "react";
import photos from "./TeamImages";
import twitterLogo from "../../images/General/twitter.svg";
import {
  TeamContainer,
  TeamTitle,
  TeamH1,
  TeamSpan,
  TeamPicturesContainer,
  TeamElement,
  MemberImg,
  MemberInfo,
  MemberName,
  MemberSocial,
  TeamA,
} from "./TeamElements";

const Team = () => {
  return (
    <TeamContainer>
      <TeamTitle>
        <TeamH1>
          Meet our <TeamSpan>Creators</TeamSpan>
        </TeamH1>
      </TeamTitle>
      <TeamPicturesContainer>
        <TeamElement>
          <div className="ElementContainer">
            <MemberImg src={photos[0]} />
            <MemberInfo>
              <MemberName>Miembro1</MemberName>
              <TeamA href="https://twitter.com/" target="_blank">
                <MemberSocial src={twitterLogo} />
              </TeamA>
            </MemberInfo>
          </div>
        </TeamElement>
        <TeamElement>
          <div className="ElementContainer">
            <MemberImg src={photos[1]} />
            <MemberInfo>
              <MemberName>Miembro2</MemberName>
              <TeamA href="https://twitter.com/" target="_blank">
                <MemberSocial src={twitterLogo} />
              </TeamA>
            </MemberInfo>
          </div>
        </TeamElement>
        <TeamElement>
          <div className="ElementContainer">
            <MemberImg src={photos[2]} />
            <MemberInfo>
              <MemberName>Miembro3</MemberName>
              <TeamA href="https://twitter.com/" target="_blank">
                <MemberSocial src={twitterLogo} />
              </TeamA>
            </MemberInfo>
          </div>
        </TeamElement>
        <TeamElement>
          <div className="ElementContainer">
            <MemberImg src={photos[3]} />
            <MemberInfo>
              <MemberName>Miembro4</MemberName>
              <TeamA href="https://twitter.com/" target="_blank">
                <MemberSocial src={twitterLogo} />
              </TeamA>
            </MemberInfo>
          </div>
        </TeamElement>
        <TeamElement>
          <div className="ElementContainer">
            <MemberImg src={photos[4]} />
            <MemberInfo>
              <MemberName>Miembro5</MemberName>
              <TeamA href="https://twitter.com/" target="_blank">
                <MemberSocial src={twitterLogo} />
              </TeamA>
            </MemberInfo>
          </div>
        </TeamElement>
      </TeamPicturesContainer>
    </TeamContainer>
  );
};

export default Team;
