"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { getProducts } from "@/services/product";
import { ProductsInterface } from "@/types/interfaces";
import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { strapiImageUrl } from "@/utils/endpoints";
import Button from "../button/button";
import Container from "../container/container";
import Link from "next/link";
import RoundButton from "../roundButton/button";

import classes from "./styles.module.css";
import "swiper/css";
import "swiper/css/navigation";

export default function Aksiya({ lng }: { lng: string }) {
  const [products, setProducts] = useState<ProductsInterface>();
  const swiper = useRef<any>(null);
  useEffect(() => {
    (async () => {
      const products = await getProducts({
        lng,
        viewAll: "aksiya",
      });

      setProducts(products);
    })();
  }, []);

  const breakpoints = {
    "1440": {
      slidesPerView: 3,
    },
    "768": {
      slidesPerView: 2,
    },
    "425": {
      slidesPerView: 1,
    },
    "200": {
      slidesPerView: 1,
    },
  };

  const handlePrev = useCallback(() => {
    if (!swiper.current) return;
    swiper.current.swiper.slidePrev();
  }, []);

  const handleNext = useCallback(() => {
    if (!swiper.current) return;
    swiper.current.swiper.slideNext();
  }, []);

  return (
    <Container className={classes.aksiya_wrapper}>
      <div className={classes.aksiya_top}>
        <h2>Акции</h2>
        <div className={classes.aksiya_btns}>
          <div className={classes.prev_btn} onClick={() => handlePrev()}>
            <img src="/icons/swiper-icon.svg" />
          </div>
          <div className={classes.next_btn} onClick={() => handleNext()}>
            <img src="/icons/swiper-icon.svg" />
          </div>
        </div>
      </div>
      <Swiper
        ref={swiper}
        slidesPerView={3}
        spaceBetween={10}
        breakpoints={breakpoints}
        className={classes.my_swiper}
      >
        {products && products.data?.length
          ? products.data.map((card, index) => {
              const {
                name,
                slug,
                description,
                price,
                oldPrice,
                predzakaz,
                previewImage,
              } = card.attributes;
              return (
                <SwiperSlide className={classes.card}>
                  <div className={classes.image}>
                    <Image
                      unoptimized
                      src={strapiImageUrl + previewImage.data.attributes.url}
                      alt="card"
                      width={260}
                      height={300}
                      className={classes.card_image}
                    />
                    <RoundButton
                      href={`/${lng}/catalog`}
                      className={classes.card_view}
                    >
                      <img
                        src="/icons/arrow_top_right.svg"
                        alt="arrow_top_right"
                      />
                    </RoundButton>
                  </div>
                  <p className={classes.text}>{name}</p>
                  <p className={classes.old_price}>{oldPrice}</p>
                  <p className={classes.price}>{price}</p>
                  <Button className={classes.btn}>Заказать</Button>
                </SwiperSlide>
              );
            })
          : ""}
      </Swiper>

      <div className={classes.view_all}>
        <Link href={`/${lng}/catalog?aksiya=1`}>Смотреть всё</Link>
      </div>
    </Container>
  );
}
