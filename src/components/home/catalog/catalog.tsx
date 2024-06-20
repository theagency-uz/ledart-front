"use client";
import Container from "@/components/common/container/container";
import classes from "./styles.module.css";
import Image from "next/image";
import RoundButton from "@/components/common/roundButton/button";
import { useEffect, useState } from "react";
import { getCategories } from "@/services/category";
import { CategoryInterface } from "@/types/interfaces";
import { strapiImageUrl } from "@/utils/endpoints";

export default function Catalog({ lng }: { lng: string }) {
  const [category, setCategory] = useState<CategoryInterface[]>();

  useEffect(() => {
    (async () => {
      const tempCategory = await getCategories({ lng, limit: 5 });

      setCategory(tempCategory);
    })();
  }, []);

  return (
    <Container className={classes.catalog}>
      <h2>Каталог товаров</h2>
      <div className={classes.cards}>
        {category && category.length
          ? category.map(({ attributes }, index) => {
              const { name, slug, description, tag, image } = attributes;
              return (
                <div
                  className={`${classes.card} ${
                    classes["card_" + (index + 1)]
                  }`}
                >
                  <RoundButton
                    href={`/${lng}/catalog?categorySlug=${slug}`}
                    className={classes.btn}
                  >
                    <img
                      src="/icons/arrow_top_right.svg"
                      alt="arrow_top_right"
                    />
                  </RoundButton>
                  <div>
                    <h3>{name}</h3>
                    <p>{description}</p>
                  </div>
                  <div className={classes.card_image}>
                    <Image
                      src={strapiImageUrl + image.data.attributes.url}
                      alt="card"
                      width={340}
                      height={170}
                    />
                  </div>
                </div>
              );
            })
          : ""}
      </div>
    </Container>
  );
}
