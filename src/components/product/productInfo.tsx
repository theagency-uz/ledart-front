"use client";
import { ProductInterface } from "@/types/interfaces";
import { useState } from "react";
import Button from "../common/button/button";
import { FormControl, MenuItem, Select } from "@mui/material";

import classes from "./styles.module.css";
import OrderModal from "../catalog/orderModal/orderModal";

export default function ProductInfo({
  product,
  lng,
}: {
  product: ProductInterface;
  lng: string;
}) {
  const [resolution, setResolution] = useState(
    product.attributes.resolutions.data.length
      ? product.attributes.resolutions.data[0].attributes.value
      : ""
  );

  const handleChange = (e: string) => {
    setResolution(e);
  };

  return (
    <div className={classes.product_info}>
      <h4 className={classes.product_info_h}>{product.attributes.name}</h4>
      {product.attributes.resolutions.data.length ? (
        <FormControl variant="standard" className={classes.product_info_select}>
          <Select
            labelId="demo-simple-select-standard-label"
            id="demo-simple-select-standard"
            value={resolution}
            onChange={(e) => handleChange(e.target.value)}
          >
            {product.attributes.resolutions.data.map(({ attributes, id }) => {
              return (
                <MenuItem value={attributes.value}>
                  Разрешение: {attributes.value}
                </MenuItem>
              );
            })}
          </Select>
        </FormControl>
      ) : null}
      <div className={classes.product_info_characteristics}>
        {product.attributes.tech_characteristics.map(({ name, value }) => {
          return (
            <p>
              <span>{name}:</span> <span>{value}</span>
            </p>
          );
        })}
      </div>
      <div className={classes.product_info_bottom}>
        <OrderModal
          lng={lng}
          className={classes.product_info_bottom_btn}
          product={{ name: product.attributes.name, resolution: resolution }}
        />

        <b>{product.attributes.price}</b>
      </div>
    </div>
  );
}
