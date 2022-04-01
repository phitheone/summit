import React from "react";
import { FaBars } from "react-icons/fa";
import imgSummit from "../../images/General/Summit-Title-recortado.png";
import imgDiscord from "../../images/General/discord.svg";
import imgTwitter from "../../images/General/twitter.svg";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavBtn,
  NavBtnLink,
  NavA,
  NavSocial,
} from "./NavbarElements";

const Navbar = ({ toggle }) => {
  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavA href="/">
            <NavLogo src={imgSummit} />
          </NavA>

          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks to="galery">GALERY</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="lore">STORY</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="Roadmap">ROADMAP</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="Team">OUR TEAM</NavLinks>
            </NavItem>
          </NavMenu>
          <NavBtn>
            <NavA href="https://magiceden.io/" target="_blank">
              <NavBtnLink to="/signup">Buy on Magic Eden</NavBtnLink>
            </NavA>
            <NavA href="https://discord.com/" target="_blank">
              <NavSocial src={imgDiscord} />
            </NavA>
            <NavA href="https://twitter.com/" target="_blank">
              <NavSocial src={imgTwitter} />
            </NavA>
          </NavBtn>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;
