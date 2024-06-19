"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import classes from "./styles.module.css";

import "swiper/css";
import Image from "next/image";
import { IMAGE_PLACEHOLDER, strapiImageUrl } from "@/utils/endpoints";
import { ImageInterface } from "@/types/interfaces";
import { useCallback, useRef } from "react";

export default function MainImagesSwiper({
  images,
}: {
  images: ImageInterface[];
}) {
  const swiper = useRef<any>(null);

  if (images.length > 1) {
    const handlePrev = useCallback(() => {
      if (!swiper.current) return;
      swiper.current.swiper.slidePrev();
    }, []);

    const handleNext = useCallback(() => {
      if (!swiper.current) return;
      swiper.current.swiper.slideNext();
    }, []);

    return (
      <Swiper ref={swiper} className={classes.mySwiper} loop>
        {images.map((image, index) => {
          return (
            <SwiperSlide key={index}>
              <Image
                className={classes.top_image}
                src={String(strapiImageUrl + image.attributes.url)}
                alt="top_image"
                width={611}
                height={461}
              />
            </SwiperSlide>
          );
        })}
        <div className={classes.aksiya_btns}>
          <div className={classes.prev_btn} onClick={() => handlePrev()}>
            <img src="/icons/swiper-icon.svg" />
          </div>
          <div className={classes.next_btn} onClick={() => handleNext()}>
            <img src="/icons/swiper-icon.svg" />
          </div>
        </div>
      </Swiper>
    );
  } else {
    return (
      <Image
        className={classes.top_image}
        src={
          images.length !== 0
            ? String(strapiImageUrl + images[0].attributes.url)
            : IMAGE_PLACEHOLDER
        }
        alt="top_image"
        width={611}
        height={461}
      />
    );
  }
}
