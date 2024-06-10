import Link from "next/link";
import classes from "./styles.module.css";

async function BreadCrumbs({ lng, links, ...props }) {
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
