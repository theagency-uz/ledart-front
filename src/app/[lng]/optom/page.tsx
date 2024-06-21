import FormWrapper from "@/components/common/formWrapper/formWrapper";
import PortfolioSlider from "@/components/common/portfolioSlider/slider";
import Partners from "@/components/optom/pertners/partners";
import SixReasons from "@/components/optom/sixReasons/sixReasons";
import Karusel from "@/components/common/karusel/karusel";
import Professionals from "@/components/optom/professionals/professionals";
import Hero from "@/components/optom/hero/hero";

export default function Optom({
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
