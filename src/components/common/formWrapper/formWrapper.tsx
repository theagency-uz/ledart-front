import React from "react";
import Form from "./form";
import Image from "next/image";
import classes from "./styles.module.css"
import Container from "../container/container";

export default function FormWrapper({ lng }: { lng: string }) {
    return (
        <Container className={classes.form_wrapper}>
            <Form lng={lng} />
            <Image src="/images/formImage.jpg" alt="form photo" height={314} width={500} className={classes.form_wrapper_image} />
        </Container>
    );
}
