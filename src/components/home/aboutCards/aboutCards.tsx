import Container from "@/components/common/container/container";
import homeAboutCards from "@/data/homeAboutCards.json";
import classes from "./styles.module.css";
import InfoCard from "@/components/common/InfoCard/InfoCard";
import Button from "@/components/common/button/button";

export default function AboutCards({ lng }: { lng: string }) {
  return (
    <Container className={classes.about}>
      <h2 className={classes.about_h}>
        {"6 причин сотрудничать\n с нашей компанией"}
      </h2>
      <div className={classes.cards}>
        {homeAboutCards.map(({ title, description, icon }, index) => {
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
      <Button href={`/${lng}/about`} className={classes.about_btn}>
        Подробнее о компании
      </Button>
    </Container>
  );
}
