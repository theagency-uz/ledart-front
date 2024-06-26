"use client";
import PartnersCards from "@/components/common/partnersCards/partnersCards";
import classes from "./styles.module.css";
import Container from "@/components/common/container/container";

export default function Partners({
  lng,
  home,
}: {
  lng: string;
  home?: boolean;
}) {
  return (
    <Container className={classes.partners}>
      {home ? <h3>{"Сотрудничаем с мировыми\n производителями:"}</h3> : null}
      <PartnersCards lng={lng} />
    </Container>
  );
}
