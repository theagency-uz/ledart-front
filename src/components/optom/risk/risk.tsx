import Image from "next/image";
import classes from "./styles.module.css";
import Container from "@/components/common/container/container";
import RoundButton from "@/components/common/roundButton/button";

const data = [
  {
    title: "Низкое качество комплектующих",
    p: "В Китае множество производителей комплектующих для светодиодных экранов, но только единицы предлагают товар высокого качества.",
    icon: "/icons/optom/11.svg",
  },
  {
    title: "Проблемы с гарантией",
    p: "Китайские производители комплектующих редко дают гарантию, а у тех, кто её предоставляет, стоимость возврата может превышать цену товара.",
    icon: "/icons/optom/22.svg",
  },
  {
    title: "Сложная доставка и логистика",
    p: "Доставка комплектующих может быть долгой и затратной, особенно с учетом таможенных пошлин и других логистических проблем.",
    icon: "/icons/optom/33.svg",
  },
];

const data2 = [
  {
    title: "Мировые бренды \nLED-экранов",
    p: "Предлагаем комплектующие только от проверенных заводов-производителей",
    icon: "/icons/optom/44.svg",
  },
  {
    title: "Гарантии \nот производителя",
    p: "Предоставляем долгосрочную гарантию на все комплектующие при соблюдении регламентов сборки и монтажа экрана",
    icon: "/icons/optom/55.svg",
  },
  {
    title: "Контейнерные поставки",
    p: "Обеспечиваем бесперебойную поставку комплектующих напрямую из Китая",
    icon: "/icons/optom/66.svg",
  },
];

export default function Risk({ lng }: { lng: string }) {
  return (
    <>
      <Container className={classes.risk}>
        <div className={classes.risk_left}>
          <h2>{"Снижаем риск \nдополнительных расходов"}</h2>
          <p>
            Производство комплектующих для LED-экранов — сложный технологический
            процесс. Неправильный выбор поставщиков может принести
            дополнительные расходы для бизнеса.
          </p>
          <div className={classes.image_wrapper}>
            <Image
              src="/images/optom/zxc.webp"
              alt="risk"
              width={578}
              height={244}
            />
          </div>
        </div>
        <div className={classes.risk_right}>
          {data.map(({ title, p, icon }, index) => {
            return (
              <div className={classes.card} key={index}>
                <h6>{title}</h6>
                <p>{p}</p>
                <RoundButton className={classes.btn}>
                  <img src={icon} alt="ic" />
                </RoundButton>
              </div>
            );
          })}
        </div>
      </Container>
      <Container className={classes.risk_bottom}>
        <h2>
          {
            "Мы гарантируем высокое качество \nвсех поставляемых нами комплектующих"
          }
        </h2>
        <div className={classes.bottom_cards}>
          {data2.map(({ title, p, icon }, index) => {
            return (
              <div className={classes.card} key={index}>
                <h6>{title}</h6>
                <p>{p}</p>
                <RoundButton className={classes.btn}>
                  <img src={icon} alt="ic" />
                </RoundButton>
              </div>
            );
          })}
        </div>
      </Container>
    </>
  );
}
