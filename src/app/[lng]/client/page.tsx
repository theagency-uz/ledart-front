import FormWrapper from "@/components/common/formWrapper/formWrapper";
import PortfolioSlider from "@/components/common/portfolioSlider/slider";
import Partners from "@/components/client/pertners/partners";
import SixReasons from "@/components/client/sixReasons/sixReasons";
import Karusel from "@/components/common/karusel/karusel";
import Professionals from "@/components/client/professionals/professionals";
import Hero from "@/components/client/hero/hero";

export default function Client({
  params: { lng },
}: {
  params: { lng: string };
}) {
  return (
    <>
      <Hero lng={lng} />
      <Karusel />
      <SixReasons lng={lng} />
      <Partners lng={lng} />
      <PortfolioSlider lng={lng} />
      <Professionals lng={lng} />
      <FormWrapper lng={lng} />
    </>
  );
}
