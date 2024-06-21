"use client";
import { useEffect, useState } from "react";
import RoundButton from "../roundButton/button";
import classes from "./styles.module.css";
import partners from "@/data/partners.json";
import { BrandInterface } from "@/types/interfaces";
import { getBrands } from "@/services/brand";
import { strapiImageUrl } from "@/utils/endpoints";

export default function PartnersCards({ lng }: { lng: string }) {
  const [data, setData] = useState<BrandInterface[]>([]);
  useEffect(() => {
    (async () => {
      const brands = await getBrands({ lng });
      setData(brands);
    })();
  }, []);

  return (
    <div className={classes.cards}>
      {data && data.length
        ? data.map(({ id, attributes }, index) => {
            const { image } = attributes;
            return (
              <div className={classes.card} key={index}>
                <RoundButton
                  href={`/${lng}/catalog?selectedBrands=[${id}]`}
                  className={classes.btn}
                >
                  <img src="/icons/arrow_top_right.svg" alt="arrow_top_right" />
                </RoundButton>
                <img
                  src={strapiImageUrl + image.data.attributes.url}
                  alt="partner"
                  className={classes.card_image}
                />
              </div>
            );
          })
        : ""}
    </div>
  );
}
