import Container from "@/components/common/container/container";
import homeAboutCards from "@/data/homeAboutCards.json";
import classes from "./styles.module.css";
import InfoCard from "@/components/common/InfoCard/InfoCard";
import Button from "@/components/common/button/button";

export default function AboutCards({ lng }: { lng: string }) {
  return (
    <Container className={classes.about}>
      <div className={classes.about_top}>
        <div className={classes.about_top_left}>
          <h2 className={classes.about_h}>
            {
              "LedART — лидер \nпо поставке комплектующих\n для LED-экранов в СНГ "
            }
          </h2>
          <Button
            href={`/${lng}/about`}
            className={`${classes.about_top_btn} ${classes.dn}`}
          >
            Подробнее о компании
          </Button>
        </div>
        <div className={classes.about_top_right}>
          <p>
            Мы — ведущие поставщики светодиодных экранов и бегущих строк,
            известные высоким качеством и инновационными решениями на рынке
            LED-технологий в странах СНГ.
          </p>
          <br />
          <p>
            Также мы специализируемся на оптовых продажах комплектующих для
            светодиодных экранов, предоставляя бизнес-клиентам широкий
            ассортимент высококачественной продукции как в наличии, так и под
            заказ по ценам Китая.
          </p>
        </div>
      </div>
      <div className={classes.cards}>
        {homeAboutCards.map(({ title, description, icon }, index) => {
          return (
            <InfoCard
              background="white"
              title={title}
              description={description}
              icon={icon}
              key={index}
            />
          );
        })}
      </div>
      <Button
        href={`/${lng}/about`}
        className={`${classes.about_top_btn} ${classes.db}`}
      >
        Подробнее о компании
      </Button>
    </Container>
  );
}
