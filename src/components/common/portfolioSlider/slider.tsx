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
import Button from "../button/button";
import { getProjects } from "@/services/project";
import { PortfolioProjectInterface } from "@/types/interfaces";
import { strapiImageUrl } from "@/utils/endpoints";

export default function PortfolioSlider({ lng }: { lng: string }) {
  const [projects, setProjects] = useState<PortfolioProjectInterface[]>([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);
  const mainSwiperRef = useRef<SwiperType | null>(null);
  const swiperRef = useRef<any | null>(null);

  useEffect(() => {
    (async () => {
      const data = await getProjects({ lng });

      setProjects(data);
    })();
  }, []);

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
            {projects.map(({ id, attributes }) => (
              <SwiperSlide
                className={classes.productBottomSwiper_item}
                key={id}
              >
                <Image
                  src={strapiImageUrl + attributes.image.data.attributes.url}
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
            {projects.map(({ id, attributes }) => (
              <SwiperSlide className={classes.productMainSwiper_item} key={id}>
                <Image
                  src={strapiImageUrl + attributes.image.data.attributes.url}
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
          <h5>{projects[activeIndex]?.attributes.name}</h5>
          <div className={classes.slider_content_infos}>
            {projects[activeIndex]?.attributes.characteristics.map(
              ({ value, name }, index) => {
                return (
                  <div key={index} className={classes.slider_content_info}>
                    <p>{name}</p>
                    <p>{value}</p>
                  </div>
                );
              }
            )}
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
