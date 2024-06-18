import RoundButton from "../roundButton/button";
import classes from "./styles.module.css";

export default function InfoCard({
  lng,
  title,
  description,
  icon,
  background,
}: {
  lng: string;
  title: string;
  description: string;
  icon: string;
  background?: string;
}) {
  return (
    <div
      className={classes.card}
      style={{
        backgroundImage:
          background === "white"
            ? "url(/icons/info-card-white.svg)"
            : "url(/icons/info-card.svg)",
      }}
    >
      <RoundButton className={classes.icon}>
        <img src={icon} alt="card icon" />
      </RoundButton>
      <h6>{title}</h6>
      <p>{description}</p>
    </div>
  );
}
