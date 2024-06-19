import Image from "next/image";
import classes from "./styles.module.css";
import Button from "@/components/common/button/button";
import { ProductInterface } from "@/types/interfaces";
import { strapiImageUrl } from "@/utils/endpoints";

export default function CatalogCard({
  card,
  lng,
}: {
  card: ProductInterface;
  lng: string;
}) {
  const { name, slug, price, oldPrice, predzakaz, previewImage } =
    card.attributes;

  return (
    <div className={classes.card}>
      <div className={classes.image}>
        <Image
          unoptimized
          src={strapiImageUrl + previewImage.data.attributes.url}
          alt="card"
          width={260}
          height={300}
        />
      </div>
      <div>
        <p className={classes.text}>{name}</p>
        {oldPrice ? <p className={classes.old_price}>{oldPrice}</p> : null}
        <p className={classes.price}>{price}</p>
        <Button className={classes.btn} href={`/${lng}/product/${slug}`}>
          Заказать
        </Button>
      </div>
    </div>
  );
}
