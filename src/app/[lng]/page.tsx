import Hero from "@/components/home/hero/hero";

import classes from "./styles.module.css";
import Catalog from "@/components/home/catalog/catalog";
import FormWrapper from "@/components/common/formWrapper/formWrapper";
import Partners from "@/components/home/partners/partners";
import Aksiya from "@/components/common/aksiya/aksiya";
import AboutCards from "@/components/home/aboutCards/aboutCards";
import CalculatePrice from "@/components/home/calculatePrice/calculatePrice";
import Faq from "@/components/home/faq/faq";
import PortfolioSlider from "@/components/common/portfolioSlider/slider";

interface PropsInterface {
  params: { lng: string };
}

export default async function Home({ params: { lng } }: PropsInterface) {
  return (
    <main className={classes.home}>
      <Hero lng={lng} />
      <Catalog lng={lng} />
      <Partners lng={lng} home />
      <Aksiya lng={lng} />
      <CalculatePrice lng={lng} />
      <AboutCards lng={lng} />
      <PortfolioSlider lng={lng} />
      <Faq lng={lng} />
      <FormWrapper lng={lng} />
    </main>
  );
}
