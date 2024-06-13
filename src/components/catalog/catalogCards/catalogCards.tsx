"use client";
import { useEffect, useState } from "react";
import CatalogCard from "../catalogCard/catalogCard";
import classes from "./styles.module.css";
import { getProducts } from "@/services/product";
import { getCategories, getCategory } from "@/services/category";
import { BrandInterface, FilterInterface } from "@/types/interfaces";
import FilterCards from "./filter";
import { getBrands } from "@/services/brand";

export default function CatalogCards({
  lng,
  categorySlug,
  selectedBrands,
}: {
  lng: string;
  categorySlug: string;
  selectedBrands: string;
}) {
  const [products, setProducts] = useState();
  const [categories, setCategories] = useState();
  const [category, setCategory] = useState();
  const [brands, setBrands] = useState<BrandInterface[]>();
  const [filter, setFilter] = useState<FilterInterface>({
    brands: [],
    type: null,
    category: null,
    aksiya: false,
    predzakaz: false,
  });

  useEffect(() => {
    (async () => {
      const products = await getProducts({ lng, categoryId: 3 });
      setProducts(products);
    })();
  }, [filter, categorySlug]);

  useEffect(() => {
    (async () => {
      const categories = await getCategories({ lng });
      const category = await getCategory({ lng, slug: categorySlug });
      const brands = await getBrands({ lng });
      // const types = await getTypes({ lng, categoryId })

      setBrands(brands);
      setCategories(categories);
      setCategory(category);
    })();
  }, []);

  return (
    <div className={classes.cards_wrapper}>
      <FilterCards
        lng={lng}
        setFilter={setFilter}
        filter={filter}
        categories={categories || []}
        products={products}
        category={category}
        brands={brands || []}
      />
      <div className={classes.cards}>
        <CatalogCard />
        <CatalogCard />
        <CatalogCard />
        <CatalogCard />
        <CatalogCard />
        <CatalogCard />
        <CatalogCard />
        <CatalogCard />
        <CatalogCard />
      </div>
    </div>
  );
}
