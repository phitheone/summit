import React from "react";

import images from "./GalleryImages";
import {
  GalleryContainer,
  GalleryH1,
  SwiperImg,
  GallerySeparator,
} from "./GalleryElements";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/autoplay";
import { FreeMode, Autoplay } from "swiper";

const Gallery = () => {
  return (
    <>
      <GalleryContainer>
        <GalleryH1>OUR PROUD MEMBERS:</GalleryH1>
        <Swiper
          spaceBetween={20}
          slidesPerView={5}
          freeMode={true}
          loop={true}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          modules={[FreeMode, Autoplay]}
          className="MySwiper"
        >
          {images.map((image) => {
            return (
              <SwiperSlide>
                <SwiperImg src={image} alt="" />
              </SwiperSlide>
            );
          })}
        </Swiper>
        <GallerySeparator></GallerySeparator>
        <Swiper
          spaceBetween={20}
          slidesPerView={5}
          freeMode={true}
          loop={true}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          modules={[FreeMode, Autoplay]}
          className="MySwiper"
        >
          {images.map((image) => {
            return (
              <SwiperSlide>
                <SwiperImg src={image} alt="" />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </GalleryContainer>
    </>
  );
};

export default Gallery;
/*
{images.map((image) => {
  return (
    <motion.div className="item" key={image}>
      <img src={image} alt="" />
    </motion.div>
  );
})}
*/
