import PartnersCards from "@/components/common/partnersCards/partnersCards"
import classes from "./styles.module.css"
import Container from "@/components/common/container/container"

export default function Partners({ lng }: { lng: string }) {
    return (
        <Container className={classes.partners}>
            <h3>{"Сотрудничаем с мировыми\n производителями:"}</h3>
            <PartnersCards lng={lng} />
        </Container>
    )
}
