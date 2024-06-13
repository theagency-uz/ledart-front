import Hero from "@/components/home/hero/hero";

import classes from "./styles.module.css"
import Catalog from "@/components/home/catalog/catalog";
import FormWrapper from "@/components/common/formWrapper/formWrapper";
import Partners from "@/components/home/partners/partners";

interface PropsInterface {
  params: { lng: string };
}

export default async function Home({ params: { lng } }: PropsInterface) {

  return (
    <main className={classes.home}>
      <Hero lng={lng} />
      <Catalog lng={lng} />
      <Partners lng={lng} />
      <FormWrapper lng={lng} />
    </main>
  );
}
