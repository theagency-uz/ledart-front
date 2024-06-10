import Link from "next/link";
import LangSwitcher from "../langSwitcher";

import classes from "./styles.module.css";

interface PropsInterface {
  lng: string;
}

export default function Header({ lng }: PropsInterface) {
  return (
    <div className={classes.header}>
      <div className={classes.navs_wrapper}>
        <LangSwitcher lng={lng} />
        <div className={classes.navs}>
          <Link href="">Каталог</Link>
          <Link href="">О нас</Link>
          <Link href={`/${lng}/contacts`}>Контакты</Link>
        </div>
      </div>
      <div className={classes.logo_wrapper}>
        <Link href={`/${lng}`} className={classes.logo}>
          <img src="/icons/logo.svg" alt="logo" />
        </Link>
      </div>
      <div className={classes.social_media}>
        <a href="tel:++ 998 78 113-61-15">+ 998 78 113-61-15</a>
        <div className={classes.icons}>
          <a href="">
            <img src="/icons/header_telegram.svg" alt="header icon" />
          </a>
          <a href="">
            <img src="/icons/header_insta.svg" alt="header icon" />
          </a>
        </div>
      </div>
    </div>
  );
}