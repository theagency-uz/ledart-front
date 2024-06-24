import classes from "./styles.module.css";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";

export default function PhoneNumber({
  formik,
  helperText,
}: {
  formik: any;
  helperText?: any;
}) {
  return (
    <>
      <label className={classes.number}>
        <PhoneInput
          defaultCountry="UZ"
          value={formik.values.phone}
          onChange={(v) => formik.setFieldValue("phone", v)}
          placeholder="+998"
          inputProps={{
            required: true,
            name: "phone",
          }}
          onBlur={formik.handleBlur}
          onKeyDown={() => console.log("key down")}
        />
      </label>
      {helperText && <p className={classes.helperText}>{helperText}</p>}
    </>
  );
}
