"use client";
import Container from "@/components/common/container/container";
import "swiper/css/thumbs";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import Image from "next/image";
import { Swiper as SwiperType } from "swiper/types";
import { Swiper, SwiperSlide } from "swiper/react";

import classes from "./styles.module.css";
import Button from "@/components/common/button/button";
import { useRef, useState } from "react";

export default function Certificate({ lng }: { lng: string }) {
  const images = [
    "/images/certificates/1.webp",
    "/images/certificates/2.webp",
    "/images/certificates/3.webp",
    "/images/certificates/4.webp",
  ];

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
    <Container className={classes.certificate}>
      <div className={classes.certificate_left}>
        <div className={classes.certificate_left_title}>
          <h2>Вся наша продукция сертифицирована</h2>
          <p>
            Приобретая LED-панели и комплектующие у нас, вы можете быть уверены,
            что они прошли все необходимые проверки и имеют сертификаты,
            подтверждающие их соответствие требованиям.
          </p>
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
      <div className={classes.certificate_right}>
        <Swiper
          modules={[FreeMode, Navigation, Thumbs]}
          direction={"vertical"}
          slidesPerView={4}
          spaceBetween={8}
          watchSlidesProgress={true}
          onSwiper={setThumbsSwiper}
          className={classes.productBottomSwiper}
          loop
        >
          {images.map((v, i) => (
            <SwiperSlide className={classes.productBottomSwiper_item} key={i}>
              <Image
                src={v}
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
          loop
          onSwiper={(swiper) => {
            mainSwiperRef.current = swiper;
          }}
        >
          {images.map((v, i) => (
            <SwiperSlide className={classes.productMainSwiper_item} key={i}>
              <Image
                src={v}
                width={470}
                height={410}
                alt="slider-image"
                unoptimized
                className={classes.sliderImg}
              />
            </SwiperSlide>
          ))}
        </Swiper>
        <div className={classes.slider_btns_2}>
          <Button className={classes.prev_btn} onClick={() => handlePrev()}>
            <img src="/icons/arrow_top_right.svg" />
          </Button>
          <Button className={classes.next_btn} onClick={() => handleNext()}>
            <img src="/icons/arrow_top_right.svg" />
          </Button>
        </div>
      </div>
    </Container>
  );
}
