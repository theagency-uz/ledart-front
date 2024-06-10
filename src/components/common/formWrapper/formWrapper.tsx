import React from "react";
import Form from "./form";
import Image from "next/image";
import classes from "./styles.module.css"

export default function FormWrapper({ lng }: { lng: string }) {
    return (
        <div className={classes.form_wrapper}>
            <Form />
            <Image src="/images/formImage.jpg" alt="form photo" height={314} width={500} className={classes.form_wrapper_image} />
        </div>
    );
}
