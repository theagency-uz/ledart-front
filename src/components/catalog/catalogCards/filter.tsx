"use client";
import { ToggleButton, ToggleButtonGroup } from "@mui/material";
import RadioIcon from "./radioIcon";
import { useRouter } from "next/navigation";
import {
  BrandInterface,
  CategoryInterface,
  TypeInterface,
} from "@/types/interfaces";
import { Dispatch, SetStateAction } from "react";

import classes from "./styles.module.css";

interface FilterCardsInterface {
  categories: CategoryInterface[];
  category: CategoryInterface;
  brands: BrandInterface[];
  categorySlug: string;
  selectedBrands: string;
  lng: string;
}

export default function FilterCards({
  props,
  setSelectedBrand,
  selectedBrand,
  types,
  selectedType,
  setSelectedType,
}: {
  props: FilterCardsInterface;
  types?: TypeInterface[];
  selectedBrand: number[];
  setSelectedBrand: Dispatch<SetStateAction<number[]>>;
  selectedType?: string;
  setSelectedType: Dispatch<SetStateAction<string>>;
}) {
  const { categories, category, brands, categorySlug, selectedBrands, lng } =
    props;
  const router = useRouter();

  const handleChangeCategory = (e: any) => {
    router.push(`?categorySlug=${e.target.value}`);
  };

  const handleChangeBrands = (v: number[]) => {
    setSelectedBrand(v);
  };

  return (
    <div className={classes.filter_wrapper}>
      <p className={classes.filter_wrapper_p}>
        <img src="/icons/clarity_filter-line.svg" alt="filter icon" /> Фильтры
      </p>
      <ToggleButtonGroup
        className={classes.filter}
        onChange={handleChangeCategory}
        exclusive
      >
        <p className={classes.filter_p}>Категории</p>
        {categories && categories.length
          ? categories.map(({ id, attributes }) => {
              const { name, slug } = attributes;
              return (
                <ToggleButton
                  key={id}
                  value={slug}
                  aria-label="bold"
                  disableRipple={true}
                  className={classes.filter_btn}
                >
                  <RadioIcon selected={categorySlug === slug} />

                  {name}
                </ToggleButton>
              );
            })
          : null}
      </ToggleButtonGroup>
      {types && types.length ? (
        <ToggleButtonGroup
          className={classes.filter}
          onChange={(e, v) => setSelectedType(v)}
          value={selectedType}
          exclusive
        >
          <p className={classes.filter_p}>Тип</p>
          {types && types.length
            ? types.map(({ id, attributes }) => {
                const { name } = attributes;
                return (
                  <ToggleButton
                    value={id}
                    aria-label="bold"
                    disableRipple={true}
                    className={classes.filter_btn}
                  >
                    <RadioIcon selected={id === Number(selectedType)} />
                    {name}
                  </ToggleButton>
                );
              })
            : null}
        </ToggleButtonGroup>
      ) : (
        ""
      )}

      <ToggleButtonGroup
        value={selectedBrand}
        onChange={(e, v) => {
          handleChangeBrands(v);
        }}
        aria-label="brand"
        className={classes.filter}
      >
        <p className={classes.filter_p}>Бренд</p>
        {brands.map((brand) => (
          <ToggleButton
            value={brand.id}
            key={brand.id}
            aria-label="bold"
            disableRipple={true}
            className={classes.filterBtn}
          >
            <RadioIcon selected={selectedBrand.includes(brand.id)} />

            {brand.attributes.name}
          </ToggleButton>
        ))}
      </ToggleButtonGroup>
    </div>
  );
}
