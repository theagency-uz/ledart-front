import Hero from "@/components/optom/hero/hero";
import LowerPrice from "@/components/optom/lowerPrice/lowerPrice";
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
    </div>
  );
}
