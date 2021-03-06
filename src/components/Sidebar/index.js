import React from "react";
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarMenu,
  SidebarLink,
  SideBtnWrap,
  SidebarBtn,
  SideSocialWrap,
  SideA,
  SideSocial,
} from "./SidebarElements";
import imgDiscord from "../../images/General/discord.svg";
import imgTwitter from "../../images/General/twitter.svg";

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink
            to="gallery"
            smooth="true"
            duration="500"
            offset={-80}
            onClick={toggle}
          >
            GALERY
          </SidebarLink>
          <SidebarLink
            to="lore"
            smooth="true"
            duration="500"
            offset={-80}
            onClick={toggle}
          >
            STORY
          </SidebarLink>
          <SidebarLink
            to="roadmap"
            smooth="true"
            duration="500"
            offset={-80}
            onClick={toggle}
          >
            ROADMAP
          </SidebarLink>
          <SidebarLink
            to="team"
            smooth="true"
            duration="500"
            offset={-80}
            onClick={toggle}
          >
            OUR TEAM
          </SidebarLink>
        </SidebarMenu>
        <SideBtnWrap>
          <SideA href="https://magiceden.io/" target="_blank">
            <SidebarBtn>Buy on Magic Eden</SidebarBtn>
          </SideA>
        </SideBtnWrap>
        <SideSocialWrap>
          <SideA href="https://discord.com/" target="_blank">
            <SideSocial src={imgDiscord} />
          </SideA>
          <SideA href="https://twitter.com/" target="_blank">
            <SideSocial src={imgTwitter} />
          </SideA>
        </SideSocialWrap>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
