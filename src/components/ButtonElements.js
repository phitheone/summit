import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";
import { Link as LinkS } from "react-scroll";

export const ButtonR = styled(LinkR)`
  border-radius: 3px;
  background: transparent;
  white-space: nowrap;
  padding: 12px 30px;
  color: #fff;
  font-size: 20px;
  outline: none;
  border: 5px solid #00ff50;
  margin: 30 px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  transition: all 0.2s ease-in-out;

  /* @media screen (max-width: 768px) {

  } */

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fca102;
    color: #001500;
  }
`;

export const ButtonS = styled(LinkS)`
  border-radius: 3px;
  background: transparent;
  white-space: nowrap;
  padding: 12px 30px;
  color: #fff;
  font-size: 20px;
  outline: none;
  border: 5px solid #00ff50;
  margin: 30 px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  transition: all 0.2s ease-in-out;

  /* @media screen (max-width: 768px) {

  } */

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fca102;
    color: #001500;
  }
`;

export const ButtonA = styled.a`
  border-radius: 3px;
  background: transparent;
  white-space: nowrap;
  padding: 12px 30px;
  color: #fff;
  font-size: 20px;
  outline: none;
  border: 5px solid #00ff50;
  margin: 30 px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  transition: all 0.2s ease-in-out;

  /* @media screen (max-width: 768px) {

  } */

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fca102;
    color: #001500;
  }
`;
