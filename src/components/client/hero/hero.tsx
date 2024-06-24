import Container from "@/components/common/container/container";
import classes from "./styles.module.css";
import Image from "next/image";

const statistics = [
  {
    value: "14+",
    name: "на рынке\nLED-панелей",
  },
  {
    value: "2500+",
    name: "реализовано\nпроектов",
  },
  {
    value: "150+",
    name: "видов комплектующих\nдля LED-экранов",
  },
  {
    value: "50тыс. м²",
    name: "установлено\nLED-экранов",
  },
];

export default function Hero({ lng }: { lng: string }) {
  return (
    <Container className={classes.hero}>
      <div className={classes.left}>
        <h2>
          {"LedART — лидер по поставке\nкомплектующих для LED-экранов в СНГ"}
        </h2>
        <p>
          Наша миссия - предоставить клиентам инновационные, надежные и
          эффективные решения для создания светодиодных дисплеев. Наша продукция
          соответствует высоким стандартам качества.
          <br />
          <br />
          Мы предоставляем большой ассортимент товаров и быструю доставку,
          благодаря собственным складам в Алматы, Астане и Ташкенте.
        </p>
        <div className={classes.statistics}>
          {statistics.map(({ name, value }, index) => {
            return (
              <div className={classes.statistic} key={index}>
                <b>{value}</b>
                <p>{name}</p>
              </div>
            );
          })}
        </div>
      </div>
      <div className={classes.right}>
        <Image
          className={classes.right_image}
          src="/images/optom-hero.jpg"
          height={340}
          width={272}
          alt="272"
        />
      </div>
    </Container>
  );
}
