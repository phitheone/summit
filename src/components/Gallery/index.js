import React, { useEffect, useState } from "react";

import images1 from "./GalleryImages1";
import images2 from "./GalleryImages2";

import {
  GalleryContainer,
  GalleryH1,
  GallerySpan,
  SwiperImg,
  GallerySeparator,
  GalleryTitleContainer,
  GallerySwiperContainer,
} from "./GalleryElements";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/autoplay";
import { FreeMode, Autoplay } from "swiper";

function useWindowSize() {
  const [w, setW] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => {
      setW(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  let t = Math.floor(w / 310);
  if (t > 5) return 5;
  return t < 1 ? 1 : t;
}

const Gallery = () => {
  const sn = useWindowSize();

  return (
    <>
      <GalleryContainer>
        <GalleryTitleContainer>
          <GalleryH1>
            Meet Your <GallerySpan>Secret</GallerySpan> Overlords:
          </GalleryH1>
        </GalleryTitleContainer>
        <GallerySwiperContainer>
          <Swiper
            spaceBetween={20}
            slidesPerView={sn}
            freeMode={{ enabled: true, sticky: true, momentumRatio: 0 }}
            loop={true}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            modules={[FreeMode, Autoplay]}
            className="MySwiper"
          >
            {images1.map((image) => {
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
            slidesPerView={sn}
            freeMode={{ enabled: true, sticky: true, momentumRatio: 0 }}
            loop={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
              reverseDirection: true,
            }}
            modules={[FreeMode, Autoplay]}
            className="MySwiper"
          >
            {images2.map((image) => {
              return (
                <SwiperSlide>
                  <SwiperImg src={image} alt="" />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </GallerySwiperContainer>
        <GallerySeparator></GallerySeparator>
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
