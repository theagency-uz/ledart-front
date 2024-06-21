import Container from "@/components/common/container/container";
import optomProfCards from "@/data/optomProfCards.json";

import classes from "./styles.module.css";
import InfoCard from "@/components/common/InfoCard/InfoCard";

export default function Professionals({ lng }: { lng: string }) {
  return (
    <Container className={classes.professionals}>
      <h2>
        {
          "Профессиональное решение по изготовлению,\nмонтажу и обслуживанию экранов"
        }
      </h2>
      <div className={classes.professionals_cards}>
        {optomProfCards.map(({ title, description, icon }, index) => {
          return (
            <InfoCard
              background="white"
              title={title}
              description={description}
              icon={icon}
              lng={lng}
              key={index}
            />
          );
        })}
      </div>
    </Container>
  );
}
