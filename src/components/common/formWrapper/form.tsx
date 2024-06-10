import React from "react";
import classes from "./styles.module.css";
import Button from "../button/button";

export default function Form() {
    return (
        <div className={classes.form}>
            <h2>Остались вопросы?</h2>
            <p>
                {
                    "Оставьте ваши контактные данные и мы свяжемся \n с вами в ближайшее время"
                }
            </p>
            <div className={classes.form_input}>
                <input type="text" placeholder="Имя" />
            </div>
            <div className={classes.form_input}>
                <input type="text" placeholder="+998 ( )" />
            </div>
            <Button>
                Получить консультацию
            </Button>
        </div>
    );
}
