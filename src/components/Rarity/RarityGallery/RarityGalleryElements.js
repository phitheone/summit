import styled from "styled-components";

export const RGContainer = styled.div`
  background-image: linear-gradient(#8850aa, #8850aa, #8850aa, #8850aa, #000);
  margin-bottom: 5rem;
`;

export const CategoriesContainer = styled.div`
  width: 95%;
  margin-left: auto;
  margin-right: auto;
  background: rgba(50, 50, 50, 0.5);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-items: center;
  border: solid #afa 7px;
  border-radius: 1rem;
`;

export const CategoryContainer = styled.div`
  width: 75%;
  margin-top: 5rem;
  margin-bottom: 5rem;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-direction: column;
  align-items: left;
  //justify-items: left;

  //border: solid #fff 2px;
`;

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

export const RGH1 = styled.h1`
  font-size: 5rem;
  color: #fff;
  margin-bottom: 3rem;

  @media screen and (max-width: 768px) {
    font-size: 3rem;
    margin-bottom: 1rem;
  }
`;

export const ButtonContainer = styled.div`
  margin-top: 1.5rem;

  @media screen and (max-width: 768px) {
    margin-top: 0rem;
    margin-bottom: 1.5rem;
  }
`;

export const AccesoryGallery = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

  //border: solid #00f 2px;
`;

export const AccesoryElement = styled.div`
  flex-basis: 15%;
  width: auto;
  min-width: 200px;
  border: solid #0ff 6px;
  border-radius: 1rem;
  margin: 0.5rem;
  //max-width: 600px;
  //height: 400px;
  //width: 350px;

  @media screen and (max-width: 768px) {
    flex-basis: 100%;
  }

  //border: solid #f00 2px;
`;

export const ElementImg = styled.img`
  width: 100%;
  height: auto;
  border-bottom: solid #0ff 6px;
`;

export const ElementName = styled.h2`
  color: #fff;
  text-align: right;
  margin: 4px;
  font-size: 2rem;
`;

export const ElementPercent = styled.h3`
  color: #fff;
  text-align: right;
  margin: 4px;
  margin-bottom: 1rem;
  font-size: 3rem;
`;
