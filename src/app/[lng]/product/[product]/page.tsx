import Aksiya from "@/components/common/aksiya/aksiya";
import BreadCrumbs from "@/components/common/breadCrumbs/breadCrumbs";
import Container from "@/components/common/container/container";
import { getProduct } from "@/services/product";

import classes from "./styles.module.css";
import MainImagesSwiper from "@/components/product/mainImagesSwiper";
import ProductInfo from "@/components/product/productInfo";
import ProductTabs from "@/components/product/productTabs";

export default async function Product({
  params: { product, lng },
}: {
  params: { product: string; lng: string };
}) {
  const data = await getProduct({ lng, slug: product });

  const links = [
    {
      name: data.attributes.category.data.attributes.name,
      link: `/${lng}/catalog?categorySlug=${data.attributes.category.data.attributes.slug}`,
      id: data.attributes.category.data.attributes.slug,
    },
    {
      name: data.attributes.name,
      link: `/${lng}/product/${data.attributes.slug}`,
      id: data.attributes.slug,
    },
  ];

  return (
    <>
      <Container>
        <BreadCrumbs links={links} lng={lng} />
        <div className={classes.product_view}>
          <div className={classes.product_view_left}>
            <MainImagesSwiper images={data.attributes.images.data} />
          </div>
          <div className={classes.product_view_right}>
            <ProductInfo lng={lng} product={data} />
          </div>
          <div className={classes.product_view_bottom}>
            <ProductTabs product={data} />
          </div>
        </div>
      </Container>
      <Aksiya lng={lng} />
    </>
  );
}
