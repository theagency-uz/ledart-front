"use client";
import { FormControl, MenuItem, Select } from "@mui/material";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import classes from "./styles.module.css";

export default function LangSwitcher({
  lng,
  backColor = "#6219a5",
}: {
  lng: string;
  backColor?: string;
}) {
  const [locale, setLocale] = useState(lng);
  const pathName = usePathname();
  const router = useRouter();

  const redirectedPathName = (locale: string) => {
    setLocale(locale);
    const newPath = `/${locale}${pathName.slice(3, pathName.length)}`;
    router.push(newPath);
  };

  return (
    <div className={classes.lang_switch}>
      <Select
        MenuProps={{
          disablePortal: true,
          disableScrollLock: true,
        }}
        labelId="demo-simple-select-standard-label"
        id="demo-simple-select-standard"
        defaultValue={lng}
        value={locale}
        onChange={(e) => redirectedPathName(e.target.value)}
        sx={{
          ".MuiPaper-root": {
            backgroundColor: backColor,
          },
        }}
      >
        <MenuItem value={"uz"}>uz</MenuItem>
        <MenuItem value={"ru"}>ru</MenuItem>
      </Select>
    </div>
  );
}
