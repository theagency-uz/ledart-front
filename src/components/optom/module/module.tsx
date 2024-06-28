import Container from "@/components/common/container/container";
import classes from "./styles.module.css";
import Button from "@/components/common/button/button";
import Image from "next/image";

export default function Module({ lng }: { lng: string }) {
  const data = {
    advantages: [
      "Усиленый каркас модуля",
      "Увеличенное количество чипов",
      "Частота обновления экрана — 3840 Гц",
      "Ровная поверхность экрана при сборке",
      "Увеличенный размер пикселя",
    ],
    disadvantages: [
      "Обычный каркас",
      "Стандартное количество чипов",
      "Частота обновления экрана — 1920 Гц",
      "Поверхность экрана при сборке имеет выступы",
      "Стандартный размер пикселя",
    ],
  };
  return (
    <Container className={classes.module}>
      <div className={classes.module_top}>
        <div className={classes.title}>
          <h2>Панели, контроллеры, процессоры и еще более 150 видов товаров</h2>
          <p>
            Выбирая нас, вы получаете не только высококачественные продукты и
            услуги, но и партнера, готового сопровождать вас на всех этапах
            проекта – от концепции до воплощения и дальнейшей эксплуатации.
          </p>
        </div>
        <Button href={`/${lng}/catalog`} className={classes.view_btn}>
          Смотреть каталог
        </Button>
      </div>
      <div className={classes.module_bottom}>
        <div className={classes.card}>
          <div className={`${classes.card_btn} ${classes.card_btn2}`}>
            Модули LedTAO
          </div>
          <div className={classes.card_content}>
            <div className={classes.card_advantages}>
              {data.advantages.map((el, index) => (
                <p className={classes.card_advantage} key={index}>
                  <img src="/icons/optom/tick.svg" alt="tick" />{" "}
                  <span>{el}</span>
                </p>
              ))}
            </div>
            <div className={classes.card_image}>
              <Image
                src="/images/optom/asd2.webp"
                alt="optom image"
                height={198}
                width={230}
              />
            </div>
          </div>
        </div>
        <div className={classes.card}>
          <div className={classes.card_btn}>Модули других производителей</div>
          <div className={classes.card_content}>
            <div className={classes.card_advantages}>
              {data.disadvantages.map((el, index) => (
                <p className={classes.card_advantage} key={index}>
                  <img src="/icons/optom/cross.svg" alt="tick" />{" "}
                  <span>{el}</span>
                </p>
              ))}
            </div>
            <div className={classes.card_image}>
              <Image
                src="/images/optom/asd1.webp"
                alt="optom image"
                height={198}
                width={230}
              />
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}
