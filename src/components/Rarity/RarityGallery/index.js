import React from "react";
import {
  RGContainer,
  CategoriesContainer,
  CategoryContainer,
  TitleContainer,
  RGH1,
  ButtonContainer,
  AccesoryGallery,
  AccesoryElement,
  ElementImg,
  ElementName,
  ElementPercent,
} from "./RarityGalleryElements";
import displayGallery1 from "./Gallery1";
import displayGallery2 from "./Gallery2";
import displayGallery3 from "./Gallery3";
import displayGallery4 from "./Gallery4";
import displayGallery5 from "./Gallery5";
import displayGallery6 from "./Gallery6";
import { ButtonS } from "../../ButtonElements";

const RarityGallery = () => {
  return (
    <>
      <RGContainer>
        <CategoriesContainer>
          <CategoryContainer id="cat1">
            <TitleContainer>
              <RGH1>Categoria 1</RGH1>
              <ButtonContainer>
                <ButtonS
                  to="rarityHero"
                  smooth="true"
                  duration="500"
                  spy={true}
                  exact="true"
                  offset={-80}
                >
                  Back to Top
                </ButtonS>
              </ButtonContainer>
            </TitleContainer>
            <AccesoryGallery>
              {displayGallery1.map((dr) => {
                return (
                  <AccesoryElement>
                    <ElementImg src={dr.imag} alt="" />
                    <ElementName>{dr.nombre}</ElementName>
                    <ElementPercent>{dr.porcentaje + "%"}</ElementPercent>
                  </AccesoryElement>
                );
              })}
            </AccesoryGallery>
          </CategoryContainer>
          <CategoryContainer id="cat2">
            <TitleContainer>
              <RGH1>Categoria 2</RGH1>
              <ButtonContainer>
                <ButtonS
                  to="rarityHero"
                  smooth="true"
                  duration="500"
                  spy={true}
                  exact="true"
                  offset={-80}
                >
                  Back to Top
                </ButtonS>
              </ButtonContainer>
            </TitleContainer>
            <AccesoryGallery>
              {displayGallery2.map((dr) => {
                return (
                  <AccesoryElement>
                    <ElementImg src={dr.imag} alt="" />
                    <ElementName>{dr.nombre}</ElementName>
                    <ElementPercent>{dr.porcentaje + "%"}</ElementPercent>
                  </AccesoryElement>
                );
              })}
            </AccesoryGallery>
          </CategoryContainer>
          <CategoryContainer id="cat3">
            <TitleContainer>
              <RGH1>Categoria 3</RGH1>
              <ButtonContainer>
                <ButtonS
                  to="rarityHero"
                  smooth="true"
                  duration="500"
                  spy={true}
                  exact="true"
                  offset={-80}
                >
                  Back to Top
                </ButtonS>
              </ButtonContainer>
            </TitleContainer>
            <AccesoryGallery>
              {displayGallery3.map((dr) => {
                return (
                  <AccesoryElement>
                    <ElementImg src={dr.imag} alt="" />
                    <ElementName>{dr.nombre}</ElementName>
                    <ElementPercent>{dr.porcentaje + "%"}</ElementPercent>
                  </AccesoryElement>
                );
              })}
            </AccesoryGallery>
          </CategoryContainer>
          <CategoryContainer id="cat4">
            <TitleContainer>
              <RGH1>Categoria 4</RGH1>
              <ButtonContainer>
                <ButtonS
                  to="rarityHero"
                  smooth="true"
                  duration="500"
                  spy={true}
                  exact="true"
                  offset={-80}
                >
                  Back to Top
                </ButtonS>
              </ButtonContainer>
            </TitleContainer>
            <AccesoryGallery>
              {displayGallery4.map((dr) => {
                return (
                  <AccesoryElement>
                    <ElementImg src={dr.imag} alt="" />
                    <ElementName>{dr.nombre}</ElementName>
                    <ElementPercent>{dr.porcentaje + "%"}</ElementPercent>
                  </AccesoryElement>
                );
              })}
            </AccesoryGallery>
          </CategoryContainer>
          <CategoryContainer id="cat5">
            <TitleContainer>
              <RGH1>Categoria 5</RGH1>
              <ButtonContainer>
                <ButtonS
                  to="rarityHero"
                  smooth="true"
                  duration="500"
                  spy={true}
                  exact="true"
                  offset={-80}
                >
                  Back to Top
                </ButtonS>
              </ButtonContainer>
            </TitleContainer>
            <AccesoryGallery>
              {displayGallery5.map((dr) => {
                return (
                  <AccesoryElement>
                    <ElementImg src={dr.imag} alt="" />
                    <ElementName>{dr.nombre}</ElementName>
                    <ElementPercent>{dr.porcentaje + "%"}</ElementPercent>
                  </AccesoryElement>
                );
              })}
            </AccesoryGallery>
          </CategoryContainer>
          <CategoryContainer id="cat6">
            <TitleContainer>
              <RGH1>Categoria 6</RGH1>
              <ButtonContainer>
                <ButtonS
                  to="rarityHero"
                  smooth="true"
                  duration="500"
                  spy={true}
                  exact="true"
                  offset={-80}
                >
                  Back to Top
                </ButtonS>
              </ButtonContainer>
            </TitleContainer>
            <AccesoryGallery>
              {displayGallery6.map((dr) => {
                return (
                  <AccesoryElement>
                    <ElementImg src={dr.imag} alt="" />
                    <ElementName>{dr.nombre}</ElementName>
                    <ElementPercent>{dr.porcentaje + "%"}</ElementPercent>
                  </AccesoryElement>
                );
              })}
            </AccesoryGallery>
          </CategoryContainer>
        </CategoriesContainer>
      </RGContainer>
    </>
  );
};

export default RarityGallery;
