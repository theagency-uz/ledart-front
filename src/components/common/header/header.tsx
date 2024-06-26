"use client";
import Link from "next/link";
import LangSwitcher from "../langSwitcher";

import classes from "./styles.module.css";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { SettingsInterface } from "@/types/interfaces";
import { getSettings } from "@/services/settings";
import Burger from "../burger/burger";

interface PropsInterface {
  lng: string;
}

export default function Header({ lng }: PropsInterface) {
  const path = usePathname();
  const [contacts, setContacts] = useState<SettingsInterface>();
  const [scrollStyle, setScrollStyle] = useState<string>("header_home");
  const [scrollStyleMobile, setScrollStyleMobile] =
    useState<string>("header_mobile_home");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition =
        window.scrollY || document.documentElement.scrollTop;
      if (scrollPosition > 0) {
        setScrollStyle("header");
        setScrollStyleMobile("header_mobile");
      } else {
        setScrollStyle("header_home");
        setScrollStyleMobile("header_mobile_home");
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    (async () => {
      const contacts = await getSettings({ lng });
      setContacts(contacts);
    })();
  }, []);
  if (window.innerWidth > 992) {
    return (
      <div
        className={path === `/${lng}` ? classes[scrollStyle] : classes.header}
      >
        <div className={classes.navs_wrapper}>
          <LangSwitcher lng={lng} />
          <div className={classes.navs}>
            <Link href={`/${lng}/catalog`}>Каталог</Link>
            <Link href={`/${lng}/client`}>Клиентам</Link>
            <Link href={`/${lng}/optom`}>Оптом</Link>
            <Link href={`/${lng}/contacts`}>Контакты</Link>
          </div>
        </div>
        <div className={classes.logo_wrapper}>
          <Link href={`/${lng}`} className={classes.logo}>
            <img src="/icons/logo.svg" alt="logo" />
          </Link>
        </div>
        <div className={classes.social_media}>
          <a href={"tel:" + contacts?.attributes?.phone}>
            {contacts?.attributes?.phone}
          </a>
          <div className={classes.icons}>
            <a href={contacts?.attributes?.telegram || ""}>
              <img src="/icons/header_telegram.svg" alt="header icon" />
            </a>
            <a href={contacts?.attributes?.instagram || ""}>
              <img src="/icons/header_insta.svg" alt="header icon" />
            </a>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <>
        {path === `/${lng}` && scrollStyleMobile === "header_mobile_home" ? (
          <div className={classes.header_mobile_home}>
            <Link href={`/${lng}`} className={classes.logo}>
              <img src="/icons/logo.svg" alt="logo" />
            </Link>
            <Burger lng={lng}>
              <img src="/icons/white-burger.svg" alt="burger ic" />
            </Burger>
          </div>
        ) : (
          <div className={classes.header_mobile}>
            <Link href={`/${lng}`} className={classes.logo}>
              <img src="/icons/black-logo.svg" alt="logo" />
            </Link>
            <Burger lng={lng}>
              <img src="/icons/burger.svg" alt="burger ic" />
            </Burger>
          </div>
        )}
      </>
    );
  }
}
