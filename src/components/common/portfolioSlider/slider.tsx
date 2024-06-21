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
import { Swiper, SwiperSlide, useSwiperSlide } from "swiper/react";
import Button from "../button/button";

const data = [
  {
    id: 1,
    image: "/images/aboutCompany/one.png",
    title: "LED-модуль для Oazis 1",
    infos: [
      { name: "Срок реализации", value: "3 дня" },
      { name: "Бренд модуля", value: "LedTAO" },
      { name: "Размер", value: "1600мм*2880 мм" },
      { name: "Разрешение", value: "320*576 пикселей" },
      { name: "Экран", value: "P5 SMD 2727" },
    ],
  },
  {
    id: 2,
    image: "/images/aboutCompany/two.png",
    title: "LED-модуль для Oazis 2",
    infos: [
      { name: "Срок реализации", value: "3 дня" },
      { name: "Бренд модуля", value: "LedTAO" },
      { name: "Размер", value: "1600мм*2880 мм" },
      { name: "Разрешение", value: "320*576 пикселей" },
      { name: "Разрешение", value: "320*576 пикселей" },
    ],
  },
  {
    id: 3,
    image: "/images/aboutCompany/three.png",
    title: "LED-модуль для Oazis 3",
    infos: [
      { name: "Срок реализации", value: "3 дня" },
      { name: "Бренд модуля", value: "LedTAO" },
      { name: "Размер", value: "1600мм*2880 мм" },
      { name: "Разрешение", value: "320*576 пикселей" },
      { name: "Разрешение", value: "320*576 пикселей" },
    ],
  },
  {
    id: 4,
    image: "/images/aboutCompany/four.png",
    title: "LED-модуль для Oazis 4",
    infos: [
      { name: "Срок реализации", value: "3 дня" },
      { name: "Бренд модуля", value: "LedTAO" },
      { name: "Разрешение", value: "320*576 пикселей" },
      { name: "Экран", value: "P5 SMD 2727" },
      { name: "Частота обновления", value: "3840 Гц" },
    ],
  },
  {
    id: 5,
    image: "/images/aboutCompany/five.png",
    title: "LED-модуль для Oazis 5",
    infos: [
      { name: "Срок реализации", value: "3 дня" },
      { name: "Бренд модуля", value: "LedTAO" },
      { name: "Размер", value: "1600мм*2880 мм" },
      { name: "Разрешение", value: "320*576 пикселей" },
      { name: "Экран", value: "P5 SMD 2727" },
      { name: "Частота обновления", value: "3840 Гц" },
    ],
  },
  {
    id: 6,
    image: "/images/aboutCompany/six.png",
    title: "LED-модуль для Oazis 6",
    infos: [
      { name: "Бренд модуля", value: "LedTAO" },
      { name: "Размер", value: "1600мм*2880 мм" },
      { name: "Разрешение", value: "320*576 пикселей" },
      { name: "Экран", value: "P5 SMD 2727" },
      { name: "Частота обновления", value: "3840 Гц" },
    ],
  },
  {
    id: 7,
    image: "/images/aboutCompany/seven.png",
    title: "LED-модуль для Oazis 7",
    infos: [
      { name: "Срок реализации", value: "3 дня" },
      { name: "Разрешение", value: "320*576 пикселей" },
      { name: "Разрешение", value: "320*576 пикселей" },
      { name: "Экран", value: "P5 SMD 2727" },
      { name: "Частота обновления", value: "3840 Гц" },
    ],
  },
  {
    id: 8,
    image: "/images/aboutCompany/eight.png",
    title: "LED-модуль для Oazis 8",
    infos: [
      { name: "Срок реализации", value: "3 дня" },
      { name: "Бренд модуля", value: "LedTAO" },
      { name: "Размер", value: "1600мм*2880 мм" },
      { name: "Разрешение", value: "320*576 пикселей" },
      { name: "Экран", value: "P5 SMD 2727" },
      { name: "Частота обновления", value: "3840 Гц" },
    ],
  },
];

export default function PortfolioSlider({ lng }: { lng: string }) {
  const swiperSlide = useSwiperSlide();
  const [activeIndex, setActiveIndex] = useState(0);
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);
  const mainSwiperRef = useRef<SwiperType | null>(null);
  const swiperRef = useRef<any | null>(null);

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

  return (
    <Container className={classes.slider_wrapper}>
      <h2>Портфолио работ</h2>
      <div className={classes.slider}>
        <div className={classes.slider_desktop}>
          <Swiper
            modules={[FreeMode, Navigation, Thumbs]}
            direction={"vertical"}
            slidesPerView={4}
            spaceBetween={8}
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
            ref={swiperRef}
            modules={[FreeMode, Navigation, Thumbs]}
            spaceBetween={10}
            slidesPerView={1}
            thumbs={{ swiper: thumbsSwiper }}
            className={classes.productMainSwiper}
            onSwiper={(swiper) => {
              mainSwiperRef.current = swiper;
            }}
            onSlideChange={(e) => {
              setActiveIndex(e.activeIndex);
            }}
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
          <h5>{data[activeIndex].title}</h5>
          <div className={classes.slider_content_infos}>
            {data[activeIndex].infos.map(({ value, name }, index) => {
              return (
                <div key={index} className={classes.slider_content_info}>
                  <p>{name}</p>
                  <p>{value}</p>
                </div>
              );
            })}
          </div>
          <div className={classes.slider_btns}>
            <Button className={classes.prev_btn} onClick={() => handlePrev()}>
              <img src="/icons/arrow_top_right.svg" />
            </Button>
            <Button className={classes.next_btn} onClick={() => handleNext()}>
              <img src="/icons/arrow_top_right.svg" />
            </Button>
          </div>
        </div>
      </div>
    </Container>
  );
}
