import BreadCrumbs from "@/components/common/breadCrumbs/breadCrumbs";
import Container from "@/components/common/container/container";
import { getCategory } from "@/services/category";
import { strapiImageUrl } from "@/utils/endpoints";
import classes from "./page.module.css";
import CatalogCards from "@/components/catalog/catalogCards/catalogCards";

export async function generateMetadata({ params: { lng, categorySlug } }) {
  const category = await getCategory({ lng, slug: categorySlug });

  return {
    metadataBase: new URL(strapiImageUrl),
    title: category?.attributes.name,
    description: category?.attributes.description,
    openGraph: {
      images: [category?.attributes.image.data.attributes.url],
    },
  };
}

async function Catalog({
  params: { lng },
  searchParams: { page = 1, categorySlug, selectedBrands },
}) {
  const links = [
    {
      name: ` ${"Каталог / Все товары"}`,
      link: `/${lng}/catalog`,
      id: "category?.attributes.slug",
    },
  ];

  return (
    <Container className={classes.catalog}>
      <BreadCrumbs links={links} lng={lng} />
      <CatalogCards
        lng={lng}
        categorySlug={categorySlug}
        selectedBrands={selectedBrands}
      />
    </Container>
  );
}

export default Catalog;
