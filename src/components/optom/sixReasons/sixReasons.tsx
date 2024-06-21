import Container from "@/components/common/container/container";
import homeAboutCards from "@/data/homeAboutCards.json";

import classes from "./styles.module.css";
import InfoCard from "@/components/common/InfoCard/InfoCard";

export default function SixReasons({ lng }: { lng: string }) {
  return (
    <Container className={classes.six_reasons}>
      <h2>{"6 причин сотрудничать\nс нашей компанией"}</h2>
      <div className={classes.six_reasons_cards}>
        {homeAboutCards.map(({ title, description, icon }, index) => {
          return (
            <InfoCard
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
