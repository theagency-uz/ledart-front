"use client";
import { ToggleButton, ToggleButtonGroup } from "@mui/material";
import RadioIcon from "./radioIcon";

import classes from "./styles.module.css";
import { useRouter } from "next/navigation";
import { useSearchParams } from "next/navigation";
import { BrandInterface, CategoryInterface } from "@/types/interfaces";
import { Dispatch, SetStateAction, useState } from "react";

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
}: {
  props: FilterCardsInterface;
  setSelectedBrand: Dispatch<SetStateAction<number[]>>;
  selectedBrand: number[];
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
    <div>
      <p>Filter</p>
      <ToggleButtonGroup
        className={classes.filter}
        onChange={handleChangeCategory}
        exclusive
      >
        <p>Категории</p>
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
      {/* <ToggleButtonGroup
                className={classes.filter}
                onChange={handleToggleChange("types")}
                value={filter.types}
                exclusive
            >
                <p>Тип</p>
                {types && types.length ?
                    (
                        types.map(({ id, attributes }) => {
                            const { name } = attributes
                            return (
                                <ToggleButton
                                    value={id}
                                    aria-label='bold'
                                    disableRipple={true}
                                    className={classes.filter_btn}
                                >
                                    <RadioIcon
                                        selected={filter.types.includes(id)}
                                    />

                                    {name}
                                </ToggleButton>
                            )
                        })
                    )
                    : null}

            </ToggleButtonGroup> */}
      <ToggleButtonGroup
        value={selectedBrand}
        onChange={(e, v) => {
          handleChangeBrands(v);
        }}
        aria-label="brand"
        className={classes.filter}
      >
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
