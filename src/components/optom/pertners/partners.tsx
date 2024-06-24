import Container from "@/components/common/container/container";
import classes from "./styles.module.css";
import PartnersCards from "@/components/common/partnersCards/partnersCards";
import Image from "next/image";

export default function Partners({ lng }: { lng: string }) {
  return (
    <Container className={classes.partners}>
      <div className={classes.partners_title}>
        <Image
          src={"/images/optom/1.jpg"}
          alt="partners"
          width={490}
          height={225}
          className={classes.partners_image}
        />
        <div>
          <h2>{"Прямые поставки \nс заводов"}</h2>
          <p>
            Мы сотрудничаем с мировыми производителями LED-экранов и
            комплектующих. Наша компания является единственным партнером Absen в
            Узбекистане и одним из первых представителей бренда LedTAO.
          </p>
        </div>
      </div>
      <PartnersCards lng={lng} background />
    </Container>
  );
}
