import Image from "next/image";
import classes from "./styles.module.css";
import Button from "@/components/common/button/button";
import { ProductInterface } from "@/types/interfaces";
import { strapiImageUrl } from "@/utils/endpoints";

export default function CatalogCard({ card }: { card: ProductInterface }) {
  const { name, slug, description, price, oldPrice, predzakaz, previewImage } =
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
      <p className={classes.text}>{name}</p>
      <p className={classes.price}>{price}</p>
      <Button className={classes.btn}>Заказать</Button>
    </div>
  );
}
