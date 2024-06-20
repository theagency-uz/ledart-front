"use client";

import { useEffect, useRef, useState } from "react";
import Container from "../container/container";

import "swiper/css/thumbs";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import classes from "./styles.module.css";
import Image from "next/image";
import { Swiper as SwiperType } from "swiper/types";
import { Swiper, SwiperSlide } from "swiper/react";

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
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);
  const mainSwiperRef = useRef<SwiperType | null>(null);

  const handlePrev = () => {
    if (mainSwiperRef.current) {
      mainSwiperRef.current.slidePrev();
    }
  };

  const handleNext = () => {
    if (mainSwiperRef.current) {
      mainSwiperRef.current.slideNext();
    }
  };

  useEffect(() => {
    console.log(mainSwiperRef.current);
  }, [mainSwiperRef]);

  return (
    <Container className={classes.slider_wrapper}>
      <h2>Портфолио работ</h2>
      <div className={classes.slider}>
        <div className={classes.slider_desktop}>
          <Swiper
            modules={[FreeMode, Navigation, Thumbs]}
            direction={"vertical"}
            slidesPerView={4}
            spaceBetween={10}
            watchSlidesProgress={true}
            onSwiper={setThumbsSwiper}
            className={classes.productBottomSwiper}
          >
            {data.map((image) => (
              <SwiperSlide
                className={classes.productBottomSwiper_item}
                key={image.id}
              >
                <Image
                  src={image.image}
                  width={100}
                  height={100}
                  alt="slider-image"
                  className={classes.sliderImg_small}
                />
              </SwiperSlide>
            ))}
          </Swiper>
          <Swiper
            modules={[FreeMode, Navigation, Thumbs]}
            spaceBetween={10}
            slidesPerView={1}
            loop={true}
            thumbs={{ swiper: thumbsSwiper }}
            className={classes.productMainSwiper}
            onSwiper={(swiper) => (mainSwiperRef.current = swiper)}
          >
            {data.map((image) => (
              <SwiperSlide
                className={classes.productMainSwiper_item}
                key={image.id}
              >
                <Image
                  src={image.image}
                  width={470}
                  height={410}
                  alt="slider-image"
                  className={classes.sliderImg}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className={classes.slider_mobile}></div>
        <div className={classes.slider_content}>
          <div className={classes.slider_btns}>
            <div className={classes.prev_btn} onClick={() => handlePrev()}>
              <img src="/icons/swiper-icon.svg" />
            </div>
            <div className={classes.next_btn} onClick={() => handleNext()}>
              <img src="/icons/swiper-icon.svg" />
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}
