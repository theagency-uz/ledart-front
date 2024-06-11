import Hero from "@/components/home/hero/hero";

import classes from "./styles.module.css"
import Catalog from "@/components/home/catalog/catalog";

interface PropsInterface {
  params: { lng: string };
}

export default async function Home({ params: { lng } }: PropsInterface) {

  return (
    <main className={classes.home}>
      <Hero lng={lng} />
      <Catalog lng={lng} />
    </main>
  );
}
