import CatalogCard from "../catalogCard/catalogCard"
import classes from "./styles.module.css"

export default function CatalogCards({ lng }: { lng: string }) {

    
    return (
        <div className={classes.cards_wrapper}>
            <div></div>
            <div className={classes.cards}>
                <CatalogCard />
                <CatalogCard />
                <CatalogCard />
                <CatalogCard />
                <CatalogCard />
                <CatalogCard />
                <CatalogCard />
                <CatalogCard />
                <CatalogCard />
            </div>
        </div>
    )
}
