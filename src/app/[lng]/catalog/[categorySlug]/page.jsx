import BreadCrumbs from "@/components/common/breadCrumbs/breadCrumbs";
import Container from "@/components/common/container/container";
import { getCategory } from "@/services/category";
import { strapiImageUrl } from "@/utils/endpoints";
import classes from "./page.module.css";

export async function generateMetadata({
  params: { lng, categorySlug },
  ...props
}) {
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
  params: { lng, categorySlug },
  searchParams: { page = 1 },
  ...props
}) {
  const category = await getCategory({ lng, slug: categorySlug });
  const links = [
    {
      name: category?.attributes.tag ?? category?.attributes.name,
      link: `/${lng}/category/${category?.attributes.slug}`,
      id: category?.attributes.slug,
    },
  ];

  return (
    <Container>
      <div className={classes.catalog}>
        <BreadCrumbs links={links} lng={lng} />
        <h3 className={classes.catalogTitle}>{category?.attributes.name}</h3>
      </div>
    </Container>
  );
}

export default Catalog;
