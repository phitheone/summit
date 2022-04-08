import styled from "styled-components";

export const TeamContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 3rem;

  //border: #0f0 solid 5px;
`;

export const TeamTitle = styled.div`
  height: auto;
  margin-left: auto;
  margin-right: auto;
  margin-top: 2rem;
  margin-bottom: 2rem;

  //border: #f00 solid 5px;
`;

export const TeamH1 = styled.h1`
  color: #ddd;
  font-size: 6rem;
  text-align: center;

  @media screen and (max-width: 768px) {
    font-size: 3rem;
    margin-left: 2rem;
    margin-right: 2rem;
  }
`;

export const TeamSpan = styled.span`
  color: #46a219;
`;

export const TeamPicturesContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  width: 80%;
  margin-left: auto;
  margin-right: auto;

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

export const TeamElement = styled.div`
  margin: 1rem;
`;

export const MemberImg = styled.img`
  width: 350px;
  border-radius: 2rem;

  @media screen and (max-width: 768px) {
    width: 250px;
  }
`;

export const MemberInfo = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

export const MemberName = styled.h2`
  color: #ddd;
  font-size: 2rem;
`;

export const MemberSocial = styled.img`
  width: 30px;
`;

export const TeamA = styled.a`
  text-decoration: none;
`;
