import FormWrapper from "@/components/common/formWrapper/formWrapper";
import Certificate from "@/components/optom/certificate/certificate";
import Hero from "@/components/optom/hero/hero";
import LowerPrice from "@/components/optom/lowerPrice/lowerPrice";
import Module from "@/components/optom/module/module";
import Partners from "@/components/optom/pertners/partners";
import Risk from "@/components/optom/risk/risk";
import React from "react";

export default function Optom({
  params: { lng },
}: {
  params: { lng: string };
}) {
  return (
    <div>
      <Hero lng={lng} />
      <LowerPrice lng={lng} />
      <Partners lng={lng} />
      <Risk lng={lng} />
      <Module lng={lng} />
      <Certificate lng={lng} />
      <FormWrapper lng={lng} />
    </div>
  );
}
