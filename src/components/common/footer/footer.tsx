"use client";
import Link from "next/link";
import Container from "../container/container";
import LangSwitcher from "../langSwitcher";
import classes from "./styles.module.css";
import { getCategories } from "@/services/category";
import { useEffect, useState } from "react";
import { CategoryInterface, SettingsInterface } from "@/types/interfaces";
import { getSettings } from "@/services/settings";

interface PropsInterface {
  lng: string;
}

export default function Footer({ lng }: PropsInterface) {
  const [category, setCategory] = useState<CategoryInterface[]>();
  const [contacts, setContacts] = useState<SettingsInterface>();

  useEffect(() => {
    (async () => {
      const tempCategory = await getCategories({ lng, limit: 3 });
      const contacts = await getSettings({ lng });

      setContacts(contacts);
      setCategory(tempCategory);
    })();
  }, []);

  return (
    <Container className={classes.footer}>
      <div className={classes.left}>
        <div>
          <Link href={`/${lng}`} className={classes.logo}>
            <img src="/icons/logo.svg" alt="logo" />
          </Link>
          <p>{"Официальный представитель\n Ledtao, Absen, Novastar, Huidu"}</p>
          <div className={classes.icons}>
            <a href={contacts?.attributes?.telegram || ""}>
              <img src="/icons/header_telegram.svg" alt="header icon" />
            </a>
            <a href={contacts?.attributes?.instagram || ""}>
              <img src="/icons/header_insta.svg" alt="header icon" />
            </a>
          </div>
        </div>
        <LangSwitcher lng={lng} backColor="#222222" />
      </div>
      <div className={classes.middle}>
        <h6>
          <Link href={`/${lng}/catalog`}>Каталог</Link>
        </h6>
        <p>
          {category && category.length
            ? category.map(({ id, attributes }, index) => {
                const { name, slug } = attributes;
                return (
                  <Link key={id} href={`/${lng}/catalog?categorySlug=${slug}`}>
                    {name}
                  </Link>
                );
              })
            : ""}
        </p>

        <h6>
          <Link href={`/${lng}/optom`}>Оптом</Link>
        </h6>
        <h6>
          <Link href={`/${lng}/contacts`}>Контакты</Link>
        </h6>
      </div>
      <div className={classes.right}>
        <div className={classes.right_inner}>
          <a href={contacts?.attributes?.address_link}>
            {contacts?.attributes?.address}
          </a>
          <p>{contacts?.attributes?.working_time}</p>
          <h6>
            <a href={"mailto:" + contacts?.attributes?.email}>
              {contacts?.attributes?.email}
            </a>
          </h6>
          <h6>
            <a href={"tel:" + contacts?.attributes?.phone}>
              {contacts?.attributes?.phone}
            </a>
          </h6>
        </div>
        <Link href="https://theagency.uz/ru">Сайт разработан The Agency</Link>
      </div>
    </Container>
  );
}
