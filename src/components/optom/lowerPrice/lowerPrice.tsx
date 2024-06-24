import Container from "@/components/common/container/container";
import classes from "./styles.module.css";
import InfoCard from "@/components/common/InfoCard/InfoCard";

const data = [
  {
    title: "Выгодная стоимость \nна комплектующие",
    p: "Обеспечиваем низкую цену за счет совместных заказов с нашими партнёрами и больших объёмов закупок",
    icon: "/icons/optom-lower-price/1.svg",
  },
  {
    title: "Регулярная доставка",
    p: "Ежемесячная поставка комплектующих напрямую из Китая",
    icon: "/icons/optom-lower-price/2.svg",
  },
  {
    title: "Сертифицированная \nпродукция с НДС",
    p: "Соблюдаем налоговое законодательство и имеем сертификацию на каждый вид комплектующих",
    icon: "/icons/optom-lower-price/3.svg",
  },
];

export default function LowerPrice({ lng }: { lng: string }) {
  return (
    <Container className={classes.lower_price}>
      <h2>Сохраняем низкие цены из-за большого объема</h2>
      <div className={classes.cards}>
        {data.map(({ title, p, icon }, index) => {
          return (
            <InfoCard
              title={title}
              description={p}
              icon={icon}
              background="white"
            />
          );
        })}
      </div>
    </Container>
  );
}
