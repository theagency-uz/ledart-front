import Button from "@/components/common/button/button";
import classes from "./styles.module.css";
import { CircularProgress, Dialog } from "@mui/material";
import { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { postApplication } from "@/services/application";
import { toast } from "react-toastify";
import PhoneNumber from "@/components/common/formWrapper/phoneNumber";
import { request } from "http";

export default function OrderModal({
  lng,
  className,
  product,
}: {
  lng: string;
  className: string;
  product: { name: string; resolution: string };
}) {
  const [open, setOpen] = useState(false);
  const handleChange = () => {
    setOpen(!open);
  };

  const [loading, setLoading] = useState(false);

  const formik = useFormik({
    initialValues: {
      name: "",
      phone: "",
      company: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().max(255).required("Имя обязательное поле"),
      phone: Yup.string().required("Номер обязательное поле"),
      company: Yup.string().max(255),
    }),
    onSubmit: async ({ name, phone }) => {
      try {
        setLoading(true);

        const result = await postApplication({
          name,
          phone,
          request: `Продукт: ${product.name} ${
            product.resolution ? "\nРасширение:" + product.resolution : ""
          }`,
          lng: lng,
          url: window.location.href,
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
    <>
      <Button className={`${className}`} onClick={handleChange}>
        Заказать
      </Button>
      <Dialog
        onClose={handleChange}
        open={open}
        className={classes.dialog_wrapper}
      >
        <div className={classes.dialog}>
          <img
            src="/icons/black-logo.svg"
            alt="logo"
            className={classes.logo}
          />
          <h6>Получите детальную консультацию специалиста</h6>
          <p>
            Оставьте заявку и в ближайшее время с вами свяжется менеджер
            компании, который проконсультирует вас по всем интересующим вопросам
          </p>
          <form onSubmit={formik.handleSubmit} className={classes.form}>
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
            <div className={classes.form_input}>
              <input
                placeholder={"Компания (необязательно)"}
                type="text"
                name="company"
                value={formik.values.company}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.name && (
                <span className={classes.error}>{formik.errors.company}</span>
              )}
            </div>
            <Button className={classes.btn} type="submit">
              Получить консультацию
              {loading && (
                <CircularProgress
                  size={15}
                  sx={{ color: "#441db5", marginLeft: "10px" }}
                />
              )}
            </Button>
          </form>
        </div>
      </Dialog>
    </>
  );
}
