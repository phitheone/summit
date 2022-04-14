import React from "react";
import { Link as LinkR, useLocation } from "react-router-dom";
import { Link as LinkS } from "react-scroll";
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
  const currentUrl = useLocation().pathname;

  return (
    <>
      <Nav>
        <NavbarContainer>
          <LinkS
            to="hero"
            smooth="true"
            duration="500"
            spy={true}
            exact="true"
            offset={-80}
          >
            <LinkR to="/summit">
              <NavLogo src={imgSummit} />
            </LinkR>
          </LinkS>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu currentUrl={currentUrl}>
            <NavItem>
              <NavLinks
                to="gallery"
                smooth="true"
                duration="500"
                spy={true}
                exact="true"
                offset={-80}
              >
                GALLERY
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                to="lore"
                smooth="true"
                duration="500"
                spy={true}
                exact="true"
                offset={-80}
              >
                STORY
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                to="roadmap"
                smooth="true"
                duration="500"
                spy={true}
                exact="true"
                offset={-80}
              >
                ROADMAP
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                to="team"
                smooth="true"
                duration="500"
                spy={true}
                exact="true"
                offset={-80}
              >
                OUR TEAM
              </NavLinks>
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
