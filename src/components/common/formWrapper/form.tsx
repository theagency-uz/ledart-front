"use client";
import Button from "../button/button";
import PhoneNumber from "./phoneNumber";
import { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

import classes from "./styles.module.css";
import { postApplication } from "@/services/application";
import { CircularProgress } from "@mui/material";
import { toast } from "react-toastify";
import { usePathname } from "next/navigation";

export default function Form({
  lng,
  text = "Получить консультацию",
  onlyForm = false,
}: {
  lng: string;
  text?: string;
  onlyForm?: boolean;
}) {
  const [loading, setLoading] = useState(false);
  const pathName = usePathname();
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
          url: pathName,
        });

        setLoading(false);
        toast.success("Успешно отправлен!");

        formik.resetForm();
      } catch (err) {
        setLoading(false);
      }
    },
  });
  return (
    <form onSubmit={formik.handleSubmit} className={classes.form}>
      {!onlyForm ? <h2>Остались вопросы?</h2> : null}
      {!onlyForm ? (
        <p>
          {
            "Оставьте ваши контактные данные и мы свяжемся \nс вами в ближайшее время"
          }
        </p>
      ) : null}

      <div className={classes.form_input}>
        <input
          placeholder={"Ваше имя"}
          type="text"
          name="name"
          value={formik.values.name}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.name && (
          <span className={classes.error}>{formik.errors.name}</span>
        )}
      </div>

      <div className={classes.form_input}>
        <PhoneNumber formik={formik} />

        {formik.touched.phone && (
          <span className={classes.error}>{formik.errors.phone}</span>
        )}
      </div>
      <Button className={classes.btn} type="submit">
        {text}
        {loading && (
          <CircularProgress
            size={15}
            sx={{ color: "#441db5", marginLeft: "10px" }}
          />
        )}
      </Button>
    </form>
  );
}
