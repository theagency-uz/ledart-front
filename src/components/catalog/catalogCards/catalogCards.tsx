"use client";
import { useEffect, useState } from "react";
import CatalogCard from "../catalogCard/catalogCard";
import classes from "./styles.module.css";
import { getProducts } from "@/services/product";
import {
  BrandInterface,
  CategoryInterface,
  ProductsInterface,
} from "@/types/interfaces";
import FilterCards from "./filter";

interface FilterCardsInterface {
  categories: CategoryInterface[];
  category: CategoryInterface;
  brands: BrandInterface[];
  categorySlug: string;
  selectedBrands: string;
  lng: string;
}

export default function CatalogCards({
  props,
}: {
  props: FilterCardsInterface;
}) {
  const { categorySlug, lng, selectedBrands } = props;
  const [products, setProducts] = useState<ProductsInterface>();
  const [selectedBrand, setSelectedBrand] = useState<number[]>(
    selectedBrands && selectedBrands.length ? JSON.parse(selectedBrands) : []
  );

  useEffect(() => {
    (async () => {
      const products = await getProducts({ lng, categoryId: 3 });
      console.log(products);

      setProducts(products);
    })();
  }, [categorySlug]);

  return (
    <div className={classes.cards_wrapper}>
      <FilterCards
        props={props}
        setSelectedBrand={setSelectedBrand}
        selectedBrand={selectedBrand}
      />
      <div className={classes.cards}>
        {products && products.data.length
          ? products.data.map((el) => {
              return <CatalogCard />;
            })
          : ""}
      </div>
    </div>
  );
}
