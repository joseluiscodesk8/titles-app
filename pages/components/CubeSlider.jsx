/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cube";
// import "swiper/css/pagination";
import { EffectCube, Pagination } from "swiper/modules";
import styles from "../../styles/index.module.scss";

export default function CubeSlider() {
  return (
    <>
      <Swiper
        effect={"cube"}
        grabCursor={true}
        cubeEffect={{
          shadow: true,
          slideShadows: true,
          shadowOffset: 40,
          shadowScale: 0.94,
        }}
        pagination={true}
        modules={[EffectCube, Pagination]}
        autoplay={{ delay: 2000, disableOnInteraction: true }}
        freeMode={true}
        className={styles.swiper}
      >
        <SwiperSlide>
          <img src="/diploma1.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/diploma2.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/diploma3.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/diploma4.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/diploma5.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/diploma6.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/diploma7.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/diploma8.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/diploma9.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/diploma10.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/diploma11.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/diploma12.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/diploma13.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/diploma14.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/diploma15.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/diploma16.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/diploma17.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/diploma18.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/diploma19.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/diploma20.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/diploma21.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/diploma22.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/diploma23.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/diploma24.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/diploma25.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/diploma26.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/diploma27.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/diploma28.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/diploma29.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/diploma30.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/diploma31.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/diploma32.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/diploma33.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/diploma34.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/diploma35.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="/diploma36.jpg" />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
