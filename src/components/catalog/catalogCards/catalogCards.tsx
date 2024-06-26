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

export interface FilterCardsInterface {
  categories: CategoryInterface[];
  category: CategoryInterface;
  brands: BrandInterface[];
  lng: string;
  categorySlug?: string;
  selectedBrands?: string;
  aksiya?: string;
  predzakaz?: string;
  all?: string;
}

export default function CatalogCards({
  props,
}: {
  props: FilterCardsInterface;
}) {
  const {
    categorySlug,
    lng,
    selectedBrands,
    category,
    aksiya,
    predzakaz,
    all,
  } = props;
  const [products, setProducts] = useState<ProductsInterface>();
  const [types, setTypes] = useState([]);
  const [selectedType, setSelectedType] = useState("");
  const [viewAll, setViewAll] = useState(
    aksiya ? "aksiya" : predzakaz ? "predzakaz" : categorySlug ? "" : "all"
  );
  const [selectedBrand, setSelectedBrand] = useState<number[]>(
    selectedBrands && selectedBrands.length ? JSON.parse(selectedBrands) : []
  );

  useEffect(() => {
    (async () => {
      const products = await getProducts({
        lng,
        category: category,
        brands: selectedBrand,
        type: selectedType,
        viewAll: viewAll,
      });
      const types = await getTypes({
        lng,
        categoryId: category ? category.id : 0,
      });

      setTypes(types);
      setProducts(products);
    })();
  }, [categorySlug, selectedBrand, selectedType, viewAll]);

  return (
    <div className={classes.cards_wrapper}>
      <FilterCards
        props={props}
        setSelectedBrand={setSelectedBrand}
        selectedBrand={selectedBrand}
        types={types}
        setSelectedType={setSelectedType}
        selectedType={selectedType}
        setViewAll={setViewAll}
        viewAll={viewAll}
      />
      {products && products.data && products.data.length ? (
        <div className={classes.cards}>
          {products.data.map((card) => {
            return <CatalogCard card={card} lng={lng} />;
          })}
        </div>
      ) : (
        <div className={classes.empty}>empty</div>
      )}
    </div>
  );
}
