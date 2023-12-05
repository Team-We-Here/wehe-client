"use client";

import "swiper/css";
import "swiper/css/pagination";
import "./mainSwiper.scss";

import { Swiper, SwiperSlide } from "swiper/react";

import { Pagination } from "swiper/modules";

export default function MainBanner() {
  return (
    <section className="banner-container">
      <Swiper pagination={true} modules={[Pagination]} className="bannerSwiper">
        <SwiperSlide>1</SwiperSlide>
        <SwiperSlide>2</SwiperSlide>
        <SwiperSlide>3</SwiperSlide>
      </Swiper>
    </section>
  );
}
