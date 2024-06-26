import React, { useEffect, useState } from "react";
import classes from "./styles.module.css";
import { Drawer } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import LangSwitcher from "../langSwitcher";
import { getSettings } from "@/services/settings";
import { SettingsInterface } from "@/types/interfaces";

export default function Burger({
  lng,
  children,
}: {
  lng: string;
  children: React.ReactNode;
}) {
  const [contacts, setContacts] = useState<SettingsInterface>();

  useEffect(() => {
    (async () => {
      const contacts = await getSettings({ lng });
      setContacts(contacts);
    })();
  }, []);
  const navigations = [
    { text: "Каталог", href: `/${lng}/catalog` },
    { text: "Клиентам", href: `/${lng}/client` },
    { text: "Оптом", href: `/${lng}/optom` },
    { text: "Контакты", href: `/${lng}/contacts` },
  ];
  const [isOpen, setOpen] = useState(false);
  const handleIsOpen = () => {
    setOpen(!isOpen);
  };

  useEffect(() => {
    if (isOpen) {
      document.getElementsByTagName("html")[0].style.overflowY = "hidden";
    } else {
      document.getElementsByTagName("html")[0].style.overflowY = "scroll";
    }
  }, [isOpen]);

  return (
    <>
      <div onClick={handleIsOpen}>{children}</div>
      <Drawer
        anchor={"top"}
        variant="temporary"
        open={isOpen}
        onClose={handleIsOpen}
        color="white"
        disablePortal={true}
        keepMounted
      >
        <div className={classes.burger_wrapper}>
          <div className={classes.header}>
            <div className={classes.left}>
              <img
                className={classes.burger_close_btn}
                onClick={handleIsOpen}
                src="/icons/burger-close.svg"
                alt="close"
              />
              <div className={classes.display_none}>
                <LangSwitcher lng={lng} />
              </div>
            </div>
            <Link href={"/" + lng} onClick={() => setOpen(false)}>
              <img
                src={"/icons/black-logo.svg"}
                alt="logo"
                height={38}
                width={154}
                className={classes.logo}
              />
            </Link>
          </div>
          <div className={classes.body}>
            <div className={classes.navs}>
              {navigations.map(({ text, href }) => {
                return (
                  <Link
                    onClick={handleIsOpen}
                    href={href}
                    key={text}
                    className={classes.body_link}
                  >
                    <span>{text}</span>&gt;
                  </Link>
                );
              })}
            </div>
          </div>
          <div className={classes.footer}>
            <div className={classes.social_media}>
              <LangSwitcher lng={lng} />
              <a href={contacts?.attributes?.instagram || ""}>
                <img src="/icons/header_insta.svg" alt="header icon" />
              </a>
              <a href={contacts?.attributes.telegram || ""}>
                <img
                  src={"/icons/header_telegram.svg"}
                  alt="social_media"
                  height={25}
                  width={25}
                />
              </a>
            </div>
            <div className={classes.display_block}>
              <a href={`tel:+${contacts?.attributes.phone}`}>
                {contacts?.attributes?.phone}
              </a>
            </div>
          </div>
        </div>
      </Drawer>
    </>
  );
}
