"use client";
import React, { useState } from "react";
import tabs from "./tabs.module.css";
import {
  FormControl,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import { ProductInterface } from "@/types/interfaces";

export default function ProductTabs({
  product,
}: {
  product: ProductInterface;
}) {
  const [tab, setTab] = useState(1);

  const Tabs = () => {
    if (tab === 1) {
      return (
        <div className={tabs.description}>{product.attributes.description}</div>
      );
    } else if (tab === 2) {
      return <div className={tabs.description}>{"asd"}</div>;
    } else {
      return <div></div>;
    }
  };

  const handleChange = (event: SelectChangeEvent) => {
    setTab(Number(event.target.value));
  };

  return (
    <div className={tabs.bottom}>
      <div className={tabs.bottom_tabs}>
        <div
          onClick={() => setTab(1)}
          className={`${tabs.bottom_tab} ${
            tab == 1 ? tabs.bottom_tab_active : ""
          }`}
        >
          Описание
        </div>

        <div
          onClick={() => setTab(2)}
          className={`${tabs.bottom_tab} ${
            tab == 2 ? tabs.bottom_tab_active : ""
          }`}
        >
          Условия доставки и оплаты
        </div>
      </div>
      <div className={tabs.tabs_wrapper}>
        <Tabs />
      </div>
    </div>
  );
}
