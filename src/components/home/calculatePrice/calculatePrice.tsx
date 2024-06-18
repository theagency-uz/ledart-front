"use client";
import Container from "@/components/common/container/container";
import { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

import classes from "./styles.module.css";
import { postApplication } from "@/services/application";
import PhoneNumber from "@/components/common/formWrapper/phoneNumber";

export default function CalculatePrice({ lng }: { lng: string }) {
  const [form, setForm] = useState<{ open: boolean }>();
  const [loading, setLoading] = useState(false);

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
        <form className={classes.calculate_price_right}>
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
        </form>
      </div>
    </Container>
  );
}
