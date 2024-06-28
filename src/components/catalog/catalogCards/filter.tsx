"use client";
import {
  Drawer,
  ToggleButton,
  ToggleButtonGroup,
  useMediaQuery,
} from "@mui/material";
import RadioIcon from "./radioIcon";
import { useRouter } from "next/navigation";
import { TypeInterface } from "@/types/interfaces";
import { Dispatch, SetStateAction, useEffect, useState } from "react";

import classes from "./styles.module.css";
import { FilterCardsInterface } from "./catalogCards";
import Container from "@/components/common/container/container";
import Button from "@/components/common/button/button";
import RoundButton from "@/components/common/roundButton/button";

export default function FilterCards({
  props,
  setSelectedBrand,
  selectedBrand,
  types,
  viewAll,
  selectedType,
  setSelectedType,
  setViewAll,
}: {
  props: FilterCardsInterface;
  types?: TypeInterface[];
  selectedBrand: number[];
  setSelectedBrand: Dispatch<SetStateAction<number[]>>;
  selectedType?: string;
  viewAll: string;
  setSelectedType: Dispatch<SetStateAction<string>>;
  setViewAll: Dispatch<SetStateAction<string>>;
}) {
  const { categories, brands, categorySlug, lng } = props;
  const wd = useMediaQuery("(min-width:992px)");

  const router = useRouter();

  const handleChangeCategory = (e: any) => {
    setViewAll("");
    setSelectedType("");
    router.push(`?categorySlug=${e.target.value}`);
  };

  const handleChangeBrands = (v: number[]) => {
    setSelectedBrand(v);
  };
  const handleChange = (e: any, v: string) => {
    setSelectedType("");
    setViewAll(v);
    router.push(`/${lng}/catalog?${v}=1`);
  };

  const [isOpen, setOpen] = useState(false);
  const handleIsOpen = () => {
    setOpen(!isOpen);
  };

  useEffect(() => {
    if (isOpen) {
      document.getElementsByTagName("html")[0].style.overflowY = "hidden";
    } else {
      document.getElementsByTagName("html")[0].style.overflowY = "scroll";
    }
  }, [isOpen]);

  if (wd) {
    return (
      <div className={classes.filter_wrapper}>
        <p className={classes.filter_wrapper_p}>
          <img src="/icons/clarity_filter-line.svg" alt="filter icon" /> Фильтры
        </p>

        <ToggleButtonGroup
          className={classes.filter}
          onChange={handleChange}
          value={viewAll}
          exclusive
        >
          <ToggleButton
            value={"all"}
            aria-label="bold"
            disableRipple={true}
            className={classes.filter_btn}
            sx={{
              border: "none",
              textTransform: "none",
              padding: "0",
              color: 0 ? "#000" : "",
            }}
          >
            <RadioIcon selected={viewAll === "all"} />
            Все товары
          </ToggleButton>
          <ToggleButton
            value={"predzakaz"}
            aria-label="bold"
            disableRipple={true}
            className={classes.filter_btn}
            sx={{
              border: "none",
              textTransform: "none",
              padding: "0",
              color: 0 ? "#000" : "",
            }}
          >
            <RadioIcon selected={viewAll === "predzakaz"} />
            Предзаказ
          </ToggleButton>
          <ToggleButton
            value={"aksiya"}
            aria-label="bold"
            disableRipple={true}
            className={classes.filter_btn}
            sx={{
              border: "none",
              textTransform: "none",
              padding: "0",
              color: 0 ? "#000" : "",
            }}
          >
            <RadioIcon selected={viewAll === "aksiya"} />
            Акции
          </ToggleButton>
        </ToggleButtonGroup>

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
                    sx={{
                      border: "none",
                      textTransform: "none",
                      padding: "0",
                      color: categorySlug === slug ? "#000" : "",
                    }}
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
                      key={id}
                      value={id}
                      aria-label="bold"
                      disableRipple={true}
                      className={classes.filter_btn}
                      sx={{
                        border: "none",
                        textTransform: "none",
                        padding: "0",
                        color: id === Number(selectedType) ? "#000" : "",
                      }}
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
          {brands.map((brand, index) => (
            <ToggleButton
              sx={{ border: "none", textTransform: "none", padding: "0" }}
              value={brand.id}
              key={brand.id}
              aria-label="bold"
              disableRipple={true}
              className={classes.filter_btn}
            >
              <RadioIcon selected={selectedBrand.includes(brand.id)} />

              {brand.attributes.name}
            </ToggleButton>
          ))}
        </ToggleButtonGroup>
      </div>
    );
  }
  return (
    <>
      <div onClick={handleIsOpen} className={classes.filter_wrapper_p}>
        <img src="/icons/clarity_filter-line.svg" alt="filter icon" /> Фильтры
      </div>
      <Drawer
        anchor={"top"}
        variant="temporary"
        open={isOpen}
        onClose={handleIsOpen}
        color="white"
        disablePortal={true}
        keepMounted
      >
        <Container className={classes.drawer}>
          <div className={classes.filter_wrapper}>
            <div className={classes.filter_wrapper_top}>
              <p className={classes.filter_wrapper_p}>
                <img src="/icons/clarity_filter-line.svg" alt="filter icon" />{" "}
                Фильтры
              </p>
              <RoundButton
                className={classes.filter_wrapper_top_btn}
                onClick={handleIsOpen}
              >
                <img src="/icons/faq-plus.svg" alt="icon" />
              </RoundButton>
            </div>

            <ToggleButtonGroup
              className={classes.filter}
              onChange={handleChange}
              value={viewAll}
              exclusive
            >
              <ToggleButton
                value={"all"}
                aria-label="bold"
                disableRipple={true}
                className={classes.filter_btn}
                sx={{
                  border: "none",
                  textTransform: "none",
                  padding: "0",
                  color: 0 ? "#000" : "",
                }}
              >
                <RadioIcon selected={viewAll === "all"} />
                Все товары
              </ToggleButton>
              <ToggleButton
                value={"predzakaz"}
                aria-label="bold"
                disableRipple={true}
                className={classes.filter_btn}
                sx={{
                  border: "none",
                  textTransform: "none",
                  padding: "0",
                  color: 0 ? "#000" : "",
                }}
              >
                <RadioIcon selected={viewAll === "predzakaz"} />
                Предзаказ
              </ToggleButton>
              <ToggleButton
                value={"aksiya"}
                aria-label="bold"
                disableRipple={true}
                className={classes.filter_btn}
                sx={{
                  border: "none",
                  textTransform: "none",
                  padding: "0",
                  color: 0 ? "#000" : "",
                }}
              >
                <RadioIcon selected={viewAll === "aksiya"} />
                Акции
              </ToggleButton>
            </ToggleButtonGroup>

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
                        sx={{
                          border: "none",
                          textTransform: "none",
                          padding: "0",
                          color: categorySlug === slug ? "#000" : "",
                        }}
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
                          key={id}
                          value={id}
                          aria-label="bold"
                          disableRipple={true}
                          className={classes.filter_btn}
                          sx={{
                            border: "none",
                            textTransform: "none",
                            padding: "0",
                            color: id === Number(selectedType) ? "#000" : "",
                          }}
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
                  sx={{ border: "none", textTransform: "none", padding: "0" }}
                  value={brand.id}
                  key={brand.id}
                  aria-label="bold"
                  disableRipple={true}
                  className={classes.filter_btn}
                >
                  <RadioIcon selected={selectedBrand.includes(brand.id)} />

                  {brand.attributes.name}
                </ToggleButton>
              ))}
            </ToggleButtonGroup>
          </div>
        </Container>
      </Drawer>
    </>
  );
}
