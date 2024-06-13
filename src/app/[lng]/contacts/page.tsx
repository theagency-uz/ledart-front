import React from "react";
import classes from "./styles.module.css";
import MapYandex from "@/components/contacts/mapYandex/MapYandex";
import contacts from "@/data/contacts.json";
import Link from "next/link";
import Container from "@/components/common/container/container";
import BreadCrumbs from "@/components/common/breadCrumbs/breadCrumbs";
import FormWrapper from "@/components/common/formWrapper/formWrapper";

interface ContactsProps {
  params: {
    lng: string;
  };
}

export const metadata = {
  title: "Контакты",
  // description: "",
  keywords: [],
};

export default async function Contacts({ params: { lng } }: ContactsProps) {
  const links = [
    {
      name: "Контакты",
      link: `/${lng}/contacts`,
      id: "contacts",
    },
  ];

  return (
    <div className={classes.contacts}>
      <Container>
        <BreadCrumbs links={links} lng={lng} />
      </Container>
      <Container className={classes.contacts_wrapper}>
        <div className={classes.left_title}>Контакты</div>
        <div className={classes.contacts_right}>
          <div className={classes.right_info}>
            <div className={classes.label}>Адрес</div>
            <div className={classes.text}>{contacts.address}</div>
          </div>
          <div className={classes.right_info}>
            <div className={classes.label}>Телефон:</div>
            <a href={"tel:" + contacts.phone} className={classes.text}>
              {contacts.phone}
            </a>
          </div>
          <div
            className={`${classes.right_info} ${classes.display_none}`}
            style={{
              display: "flex",
              gap: "35px",
              flexDirection: "row",
              marginTop: "10px",
            }}
          >
            <Link href={contacts.telegram} className={classes.text}>
              <img
                src={"/icons/contact_tg.svg"}
                alt="telegram"
                height={25}
                width={25}
              />
            </Link>
            <Link href={contacts.instagram} className={classes.text}>
              <img
                src={"/icons/contact_insta.svg"}
                alt="telegram"
                height={25}
                width={25}
              />
            </Link>
          </div>
          <div className={`${classes.right_info} ${classes.div4}`}>
            <div className={`${classes.label} notranslate`}>Email</div>
            <a href={"mailto:" + contacts.mail} className={classes.text}>
              {contacts.mail}
            </a>
          </div>
          <div
            className={`${classes.right_info} ${classes.display_block}`}
            style={{ display: "flex", gap: "35px", flexDirection: "row" }}
          >
            <Link href={contacts.telegram} className={classes.text}>
              <img
                src={"/icons/contact_tg.svg"}
                alt="telegram"
                height={25}
                width={25}
              />
            </Link>
            <Link href={contacts.instagram} className={classes.text}>
              <img
                src={"/icons/contact_insta.svg"}
                alt="telegram"
                height={25}
                width={25}
              />
            </Link>
          </div>
        </div>
      </Container>
      <div className={classes.map}>
        <MapYandex defaultCenter={[41.351642, 69.238926]} />
      </div>
      <FormWrapper lng={lng} />
    </div>
  );
}
