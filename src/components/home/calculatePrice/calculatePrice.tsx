"use client";
import Container from "@/components/common/container/container";
import { useFormik } from "formik";
import * as Yup from "yup";
import { postApplication } from "@/services/application";
import PhoneNumber from "@/components/common/formWrapper/phoneNumber";
import { toast } from "react-toastify";

import classes from "./styles.module.css";
import { CircularProgress } from "@mui/material";

export default function CalculatePrice({ lng }: { lng: string }) {
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
        const result = await postApplication({
          name,
          phone,
          lng: lng,
          url: window.location.href,
        });

        toast.success("Успешно отправлен!");

        formik.resetForm();
      } catch (err) {
        toast.error("Error");
      }
    },
  });

  return (
    <Container>
      <div className={classes.calculate_price}>
        <div className={classes.calculate_price_left}>
          <h2>Рассчитать стоимость LED-экрана</h2>
          <p>
            Если вам нужна консультация по выбору LED-панелей или комплектующих,
            оставьте свои контактные данные, и мы свяжемся с вами в ближайшее
            время.
          </p>
        </div>
        <form
          className={classes.calculate_price_right}
          onSubmit={formik.handleSubmit}
        >
          <div className={classes.form_input}>
            <input
              placeholder={"Ваше имя"}
              type="text"
              name="name"
              value={formik.values.name}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
          </div>
          <div className={classes.form_input}>
            <PhoneNumber formik={formik} />
          </div>
          <button type="submit"></button>
        </form>
      </div>
    </Container>
  );
}
