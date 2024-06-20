import BreadCrumbs from "@/components/common/breadCrumbs/breadCrumbs";
import Container from "@/components/common/container/container";
import classes from "./page.module.css";
import CatalogCards from "@/components/catalog/catalogCards/catalogCards";
import { getCategories, getCategory, getTypes } from "@/services/category";
import { getBrands } from "@/services/brand";

async function Catalog({
  params: { lng },
  searchParams: {
    page = 1,
    categorySlug,
    selectedBrands,
    aksiya,
    predzakaz,
    all,
  },
}: {
  params: { lng: string };
  searchParams: {
    page: number;
    categorySlug: string;
    selectedBrands: string;
    aksiya: string;
    predzakaz: string;
    all: string;
  };
}) {
  const categories = await getCategories({ lng });
  const category = await getCategory({ lng, slug: categorySlug });
  const brands = await getBrands({ lng });
  const props = {
    categories,
    category,
    brands,
    categorySlug,
    selectedBrands,
    lng,
    aksiya,
    predzakaz,
    all,
  };

  const links = [
    {
      name: `Каталог / ${category ? category.attributes.name : "Все товары"}`,
      link: `/${lng}/catalog`,
      id: "",
    },
  ];

  return (
    <Container className={classes.catalog}>
      <BreadCrumbs links={links} lng={lng} />
      <CatalogCards props={props} />
    </Container>
  );
}

export default Catalog;
