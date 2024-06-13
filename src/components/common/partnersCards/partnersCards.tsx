import RoundButton from "../roundButton/button"
import classes from "./styles.module.css"
import partners from "@/data/partners.json"

export default function PartnersCards({ lng }: { lng: string }) {
    return (
        <div className={classes.cards}>
            {partners.map(({ image, href }, index) => {
                return (
                    <div className={classes.card} key={index}>
                        <RoundButton href={href} className={classes.btn}>
                            <img src="/icons/arrow_top_right.svg" alt="arrow_top_right" />
                        </RoundButton>
                        <img src={image} alt="partner" className={classes.card_image} />
                    </div>
                )
            })}
        </div>
    )
}
