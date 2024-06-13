import classes from "./styles.module.css";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

export default function PhoneNumber({
  value,
  formik,
  name,
  helperText
}: {
  value: string,
  formik: any,
  name: string,
  helperText: any
}) {

  return (
    <>
      <label className={classes.number}>
        {/* <p className={classes.label}>{label}</p> */}
        <PhoneInput
          country={"uz"}
          value={value}
          onChange={(v, country, e, formattedValue) =>
            formik.setFieldValue(name, v)
          }
          placeholder='+9989 (99) 999-99-99'
          inputProps={{
            required: true,
            name: name,
          }}
        />
      </label>
      {helperText && <p className={classes.helperText}>{helperText}</p>}
    </>
  );
}
