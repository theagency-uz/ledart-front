import Container from "@/components/common/container/container";
import classes from "./styles.module.css";
import PartnersCards from "@/components/common/partnersCards/partnersCards";

export default function Partners({ lng }: { lng: string }) {
  return (
    <Container className={classes.partners}>
      <div className={classes.partners_title}>
        <h2>Наши партнеры</h2>
        <p>
          {
            "Мы сотрудничаем с мировыми производителями LED-экранов и\nкомплектующих. Наша компания является единственным партнером\nAbsen вУзбекистане и одним из первых представителей бренда LedTAO."
          }
        </p>
      </div>
      <PartnersCards lng={lng} />
    </Container>
  );
}
