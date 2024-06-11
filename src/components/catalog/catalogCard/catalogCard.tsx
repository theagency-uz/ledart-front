import Image from "next/image"
import classes from "./styles.module.css"
import Button from "@/components/common/button/button"

export default function CatalogCard() {
    return (
        <div className={classes.card}>
            <div className={classes.image}>
                <Image unoptimized src="/images/product.png" alt="card" width={260} height={300} />
            </div>
            <p className={classes.text}>LED-модуль p3 RGB SMD2121 192*192 </p>
            <p className={classes.price}>от 20 000 000 сум</p>
            <Button className={classes.btn}>Заказать</Button>
        </div>
    )
}
