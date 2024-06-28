"use client";
import React, { SyntheticEvent, useState } from "react";
import tabs from "./tabs.module.css";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  SelectChangeEvent,
  useMediaQuery,
} from "@mui/material";
import { ProductInterface } from "@/types/interfaces";
import Button from "../common/button/button";

export default function ProductTabs({
  product,
}: {
  product: ProductInterface;
}) {
  const wd = useMediaQuery("(min-width:700px)");
  const [tab, setTab] = useState(1);

  const Tabs = () => {
    if (tab === 1) {
      return (
        <div className={tabs.description}>{product.attributes.description}</div>
      );
    } else if (tab === 2) {
      return (
        <div className={tabs.description}>
          {
            "Наличная и безналичная оплата. Цена доставки договорная или самовывоз - г.Ташкент, Алмазарский район, ул.Дилсарой 25."
          }
        </div>
      );
    } else {
      return <div></div>;
    }
  };

  const handleChange = (event: SelectChangeEvent) => {
    setTab(Number(event.target.value));
  };

  const [expanded, setExpanded] = useState<string | false>("panel1");

  const handleChangeAcc =
    (panel: string) => (event: SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  if (wd) {
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

  return (
    <div className={tabs.accordion_wrapper}>
      <Accordion
        expanded={expanded === `panel1`}
        onChange={handleChangeAcc(`panel1`)}
        className={tabs.accordion}
      >
        <AccordionSummary
          expandIcon={
            <Button className={tabs.accordion_btn}>
              <img src="/icons/faq-plus.svg" alt="icon" />
            </Button>
          }
          aria-controls={`panel1-content`}
          id={`panel1-content`}
        >
          <h5>Описание</h5>
        </AccordionSummary>
        <AccordionDetails>
          <p>{product.attributes.description}</p>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === `panel2`}
        onChange={handleChangeAcc(`panel2`)}
        className={tabs.accordion}
      >
        <AccordionSummary
          expandIcon={
            <Button className={tabs.accordion_btn}>
              <img src="/icons/faq-plus.svg" alt="icon" />
            </Button>
          }
          aria-controls={`panel2-content`}
          id={`panel2-content`}
        >
          <h5>Условия доставки и оплаты</h5>
        </AccordionSummary>
        <AccordionDetails>
          <p>
            {
              "Наличная и безналичная оплата. Цена доставки договорная или самовывоз - г.Ташкент, Алмазарский район, ул.Дилсарой 25."
            }
          </p>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
