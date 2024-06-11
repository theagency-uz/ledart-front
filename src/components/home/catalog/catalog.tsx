"use client"
import Container from "@/components/common/container/container"
import classes from "./styles.module.css"
import Image from "next/image"

export default function Catalog({ lng }: { lng: string }) {
    const data = [
        {
            h: "Наружные",
            p: "Контроллеры, видеопроцессоры, источники питания",
            image: "/images/catalog/1.png"
        },
        {
            h: "Наружные",
            p: "Контроллеры, видеопроцессоры, источники питания",
            image: "/images/catalog/2.png"
        },
        {
            h: "Наружные",
            p: "Контроллеры, видеопроцессоры, источники питания",
            image: "/images/catalog/3.png"
        },
        {
            h: "Наружные",
            p: "Контроллеры, видеопроцессоры, источники питания",
            image: "/images/catalog/4.png"
        },
        {
            h: "Наружные",
            p: "Контроллеры, видеопроцессоры, источники питания",
            image: "/images/catalog/5.png"
        },
    ]
    return (
        <Container className={classes.catalog}>
            <h2>Каталог товаров</h2>
            <div className={classes.cards}>
                {data.map((el, index) => {
                    return (
                        <div className={`${classes.card} ${classes["card_" + (index + 1)]}`}>
                            <h3>{el.h}</h3>
                            <p>{el.p}</p>
                            <Image src={el.image} alt="card" width={340} height={170} />
                        </div>
                    )
                })}
            </div>
        </Container>
    )
}
