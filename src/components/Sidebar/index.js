import React from "react";
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarWrapper,
  SidebarMenu,
  SidebarLink,
  SideBtnWrap,
  SidebarRoute,
} from "./SidebarElements";

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to="galery" onClick={toggle}>
            GALERY
          </SidebarLink>
          <SidebarLink to="Story" onClick={toggle}>
            STORY
          </SidebarLink>
          <SidebarLink to="Roadmap" onClick={toggle}>
            ROADMAP
          </SidebarLink>
          <SidebarLink to="team" onClick={toggle}>
            OUR TEAM
          </SidebarLink>
        </SidebarMenu>
        <SideBtnWrap>
          <SidebarRoute to="buy">Buy on Magic Eden</SidebarRoute>
        </SideBtnWrap>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
