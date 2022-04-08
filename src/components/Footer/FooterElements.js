import styled from "styled-components";

export const FooterContainer = styled.div`
  width: 100%;
  height: auto;
  background: #131313;
  display: flex;
  align-items: center;
  justify-content: center;

  //border: green solid 3px;
`;

export const FooterTable = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 50%;
  margin-left: auto;
  margin-right: auto;

  align-items: center;
  justify-content: center;

  @media screen and (max-width: 768px) {
    width: 90%;
  }
  //border: red solid 3px;
`;

export const TopCell = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 6rem;
  margin-bottom: 1rem;
  width: 100%;
  justify-content: space-between;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
  //border: blue solid 3px;
`;

export const Logo = styled.img`
  width: 200px;

  @media screen and (max-width: 768px) {
    margin-bottom: 1.5rem;
  }
`;

export const SocialLinks = styled.div`
  display: flex;
  flex-direction: row;
  width: 12%;
  align-content: center;
  justify-content: space-around;

  @media screen and (max-width: 768px) {
    width: 25%;
  }
  //border: yellow solid 3px;
`;

export const FooterA = styled.a`
  text-decoration: none;
`;

export const Discord = styled.img`
  width: 40px;
  margin-left: 5px;
  margin-right: 5px;
`;

export const Twitter = styled.img`
  width: 40px;
  margin-left: 5px;
  margin-right: 5px;
`;

export const BottonCell = styled.div`
  width: 100%;
  //display: flex;
  //align-items: ;

  //border: blueviolet solid 3px;
`;

export const FooterHr = styled.hr`
  width: 100%;
  border-top: 1px solid green;
`;

export const FooterP = styled.p`
  margin-top: 6rem;
  margin-bottom: 2rem;
  color: #aaa;
  font-size: 1.7rem;
  text-align: center;
`;
