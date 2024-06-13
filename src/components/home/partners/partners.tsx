"use client";
import PartnersCards from "@/components/common/partnersCards/partnersCards";
import classes from "./styles.module.css";
import Container from "@/components/common/container/container";
import { useEffect, useState } from "react";
import { BrandInterface } from "@/types/interfaces";
import { getBrands } from "@/services/brand";

export default function Partners({ lng }: { lng: string }) {
  return (
    <Container className={classes.partners}>
      <h3>{"Сотрудничаем с мировыми\n производителями:"}</h3>
      <PartnersCards lng={lng} />
    </Container>
  );
}
