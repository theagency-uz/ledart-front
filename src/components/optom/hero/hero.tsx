import Image from "next/image";
import classes from "./styles.module.css";
import Container from "@/components/common/container/container";
import Form from "@/components/common/formWrapper/form";

export default function Hero({ lng }: { lng: string }) {
  return (
    <div className={classes.hero}>
      <Image
        src="/images/clients-back.jpg"
        alt="client-back"
        className={classes.hero_image}
        width={1160}
        height={300}
        unoptimized
      />
      <Container className={classes.hero_form}>
        <div className={classes.hero_form_inner}>
          <h2>{"Комплектующие оптом \nсо складов LedART"}</h2>
          <p>
            Весь товар уже имеется в наличии, что уменьшает количество рисков.
            Предоставляем большой ассортимент товаров для светодиодных экранов.
            Наличие собственных складов в Алматы, Астане и Ташкенте дает нам
            возможность поставлять товар в короткие сроки.
          </p>
        </div>
        <Form lng={lng} text={"Оставить заявку"} onlyForm />
      </Container>
    </div>
  );
}
