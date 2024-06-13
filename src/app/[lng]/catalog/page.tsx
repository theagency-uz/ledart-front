import BreadCrumbs from "@/components/common/breadCrumbs/breadCrumbs";
import Container from "@/components/common/container/container";
import classes from "./page.module.css";
import CatalogCards from "@/components/catalog/catalogCards/catalogCards";
import { getCategories, getCategory } from "@/services/category";
import { getBrands } from "@/services/brand";

// export async function generateMetadata({
//   params: { lng },
//   searchParams: { page = 1, categorySlug },
// }:{
//   params: { lng: string };
//   searchParams: { page: number; categorySlug: string};
// }) {
//   const category = await getCategory({ lng, slug: categorySlug });

//   return {
//     metadataBase: new URL(strapiImageUrl),
//     title: category?.attributes.name,
//     description: category?.attributes.description,
//     openGraph: {
//       images: [category?.attributes.image.data.attributes.url],
//     },
//   };
// }

async function Catalog({
  params: { lng },
  searchParams: { page = 1, categorySlug, selectedBrands },
}: {
  params: { lng: string };
  searchParams: { page: number; categorySlug: string; selectedBrands: string };
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
