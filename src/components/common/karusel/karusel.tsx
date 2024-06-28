import Container from "../container/container";
import classes from "./styles.module.css";

const data = [
  {
    image: "/images/logo_slider/1.svg",
  },
  {
    image: "/images/logo_slider/2.svg",
  },
  {
    image: "/images/logo_slider/3.svg",
  },
  {
    image: "/images/logo_slider/4.svg",
  },
  {
    image: "/images/logo_slider/5.svg",
  },
  {
    image: "/images/logo_slider/6.svg",
  },
  {
    image: "/images/logo_slider/7.svg",
  },
  {
    image: "/images/logo_slider/8.svg",
  },
  {
    image: "/images/logo_slider/9.svg",
  },
  {
    image: "/images/logo_slider/10.svg",
  },
  {
    image: "/images/logo_slider/11.svg",
  },
  {
    image: "/images/logo_slider/12.svg",
  },
];

export default function Karusel() {
  return (
    <div className={classes.karusel_wrapper}>
      <Container>
        <h2>
          Работаем с <span>ТОПами</span> разных ниш
        </h2>
      </Container>
      <div className={classes.slider}>
        <div className={classes.slide_track}>
          {data.map(({ image }, index) => {
            return (
              <div className={classes.slide} key={index}>
                <img src={image} height="100" width="100" alt="" />
              </div>
            );
          })}
          {data.map(({ image }, index) => {
            return (
              <div className={classes.slide} key={index}>
                <img src={image} height="100" width="100" alt="" />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
