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
import { getTypes } from "@/services/category";

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
  const { categorySlug, lng, selectedBrands, category } = props;
  const [products, setProducts] = useState<ProductsInterface>();
  const [types, setTypes] = useState([]);
  const [selectedType, setSelectedType] = useState("");
  const [selectedBrand, setSelectedBrand] = useState<number[]>(
    selectedBrands && selectedBrands.length ? JSON.parse(selectedBrands) : []
  );

  useEffect(() => {
    (async () => {
      const products = await getProducts({ lng, categoryId: 3 });
      const types = await getTypes({
        lng,
        categoryId: category ? category.id : 0,
      });

      setTypes(types);
      setProducts(products);
    })();
    console.log({ selectedType, category, selectedBrand });
  }, [categorySlug, selectedBrand, selectedType]);

  return (
    <div className={classes.cards_wrapper}>
      <FilterCards
        props={props}
        setSelectedBrand={setSelectedBrand}
        selectedBrand={selectedBrand}
        types={types}
        setSelectedType={setSelectedType}
        selectedType={selectedType}
      />
      {products && products.data.length ? (
        <div className={classes.cards}>
          {products.data.map((card) => {
            return <CatalogCard card={card} />;
          })}
        </div>
      ) : (
        <div className={classes.empty}>empty</div>
      )}
    </div>
  );
}
