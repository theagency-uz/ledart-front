"use client"
import Button from "../button/button";
import PhoneNumber from "./phoneNumber";
import { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

import classes from "./styles.module.css";
import { postApplication } from "@/services/application";
import { CircularProgress } from "@mui/material";

export default function Form({ lng }: { lng: string }) {
    const [form, setForm] = useState<{ open: boolean }>()
    const [loading, setLoading] = useState(false)

    const formik = useFormik({
        initialValues: {
            name: "",
            phone: "",

        },
        validationSchema: Yup.object({
            name: Yup.string().max(255).required("Имя обязательное поле"),
            phone: Yup.string().required("Номер обязательное поле"),

        }),
        onSubmit: async ({ name, phone }) => {
            try {
                setLoading(true);

                const result = await postApplication({
                    name,
                    phone,
                    lng: lng,
                    url: window.location.href,
                });

                setLoading(false);

                setForm({ open: false });
                formik.resetForm();
            } catch (err) {
                setLoading(false);
            }
        },
    });
    return (
        <form onSubmit={formik.handleSubmit} className={classes.form}>
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
                <PhoneNumber
                    value={formik.values.phone}
                    formik={formik}
                    name="phone"
                    helperText={formik.touched.phone && formik.errors.phone}
                />
            </div>
            <Button className={classes.btn} type="submit">
                Получить консультацию {loading && <CircularProgress size={20} sx={{ color: "#fff" }} />}
            </Button>
        </form>
    );
}
