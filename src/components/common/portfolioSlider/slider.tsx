"use client";

import { useState } from "react";
import Container from "../container/container";

import "swiper/css/thumbs";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import classes from "./styles.module.css";

const data = [
  {
    id: 1,
    image: "/images/aboutCompany/one.png",
  },
  {
    id: 2,
    image: "/images/aboutCompany/two.png",
  },
  {
    id: 3,
    image: "/images/aboutCompany/three.png",
  },
  {
    id: 4,
    image: "/images/aboutCompany/four.png",
  },
  {
    id: 5,
    image: "/images/aboutCompany/five.png",
  },
  {
    id: 6,
    image: "/images/aboutCompany/six.png",
  },
  {
    id: 7,
    image: "/images/aboutCompany/seven.png",
  },
  {
    id: 8,
    image: "/images/aboutCompany/eight.png",
  },
];

export default function PortfolioSlider({ lng }: { lng: string }) {
  const [thumbsSwiper, setThumbsSwiper] = useState<any>(null);

  return (
    <Container>
      <h2>asd</h2>
      <div className={classes.swipers}>
        <div className={classes.swiper_right}>
          <Swiper
            loop={true}
            spaceBetween={10}
            navigation={true}
            thumbs={{ swiper: thumbsSwiper }}
            modules={[FreeMode, Navigation, Thumbs]}
          >
            {data.map(({ image }, index) => {
              return (
                <SwiperSlide key={index}>
                  <img src={image} className={classes.slide_big_image} />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
        <div className={classes.swiper_left}>
          <Swiper
            onSwiper={setThumbsSwiper}
            loop={true}
            spaceBetween={10}
            slidesPerView={4}
            modules={[FreeMode, Navigation, Thumbs]}
          >
            {data.map(({ image }, index) => {
              return (
                <SwiperSlide key={index}>
                  <img src={image} className={classes.slide_small_image} />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </Container>
  );
}
