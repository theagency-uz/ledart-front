import Link from "next/link";

import classes from "./styles.module.css";

export default function Hero({ lng }: { lng: string }) {
  return (
    <div className={classes.hero_wrapper}>
      <div className={classes.hero}>
        <div className={classes.content}>
          <h1>{"Успех -\nдело техники!"}</h1>
          <p>
            {
              "Ledart — ведущий поставщик высококачественных\n комплектующих для светодиодных экранов"
            }
          </p>
          <Link href={`/${lng}/catalog`}>Смотреть каталог</Link>
        </div>
      </div>
    </div>
  );
}
