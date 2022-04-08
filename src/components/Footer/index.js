import React from "react";
import logo from "../../images/General/Summit-Title-recortado.png";
import discord from "../../images/General/discord.svg";
import twitter from "../../images/General/twitter.svg";
import {
  FooterContainer,
  FooterTable,
  TopCell,
  Logo,
  SocialLinks,
  FooterA,
  Discord,
  Twitter,
  BottonCell,
  FooterHr,
  FooterP,
} from "./FooterElements";

const Footer = () => {
  return (
    <FooterContainer>
      <FooterTable>
        <TopCell>
          <Logo src={logo} />
          <SocialLinks>
            <FooterA href="https://discord.com/" target="_blank">
              <Discord src={discord} />
            </FooterA>
            <FooterA href="https://twitter.com/" target="_blank">
              <Twitter src={twitter} />
            </FooterA>
          </SocialLinks>
        </TopCell>
        <FooterHr />
        <BottonCell>
          <FooterP>© 2022 The Summit Gang Team | All rights reserved</FooterP>
        </BottonCell>
      </FooterTable>
    </FooterContainer>
  );
};

export default Footer;
