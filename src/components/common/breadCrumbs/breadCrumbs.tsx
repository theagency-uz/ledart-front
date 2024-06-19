"use client";
import Link from "next/link";
import classes from "./styles.module.css";

interface linkInterface {
  name: string;
  link: string;
  id: string;
}

function BreadCrumbs({
  lng,
  links,
  ...props
}: {
  lng: string;
  links: linkInterface[];
}) {
  return (
    <div className={classes.breadCrumbs}>
      <Link className={classes.link} href={`/${lng}`}>
        Главная
      </Link>
      {links.map((link) => (
        <Link key={link.name} href={link.link} className={classes.link}>
          {" / "}
          {link.name}
        </Link>
      ))}
    </div>
  );
}

export default BreadCrumbs;
