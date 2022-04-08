import styled from "styled-components";
import { Link } from "react-scroll";

export const Button = styled(Link)`
  border-radius: 3px;
  background: ${({ primary }) => (primary ? "transparent" : "transparent")};
  white-space: nowrap;
  padding: ${({ big }) => (big ? "14px 48px" : "12px 30px")};
  color: ${({ dark }) => (dark ? "#010606" : "#fff")};
  font-size: ${({ fontBig }) => (fontBig ? "30px" : "20px")};
  outline: none;
  border: 5px solid #00ff50;
  margin: 30 px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;

  /* @media screen (max-width: 768px) {

  } */

  &:hover {
    transition: all 0.2s ease-in-out;
    background: ${({ primary }) => (primary ? "#fca102" : "#fca102")};
    color: ${({ dark }) => (dark ? "#001500" : "#001500")};
  }
`;
