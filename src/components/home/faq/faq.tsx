"use client";
import Container from "@/components/common/container/container";
import { getFaq } from "@/services/faq";
import { SyntheticEvent, useEffect, useState } from "react";

import classes from "./styles.module.css";
import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material";
import { FaqInterface } from "@/types/interfaces";
import Button from "@/components/common/button/button";

export default function Faq({ lng }: { lng: string }) {
  const [faq, setFaq] = useState<FaqInterface[]>([]);
  const [expanded, setExpanded] = useState<string | false>("panel0");

  const handleChange =
    (panel: string) => (event: SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  useEffect(() => {
    (async () => {
      const data = await getFaq({ lng });
      setFaq(data);
    })();
  }, []);

  return (
    <Container className={classes.faq_wrapper}>
      <h2>Ответы на частые вопросы</h2>
      {faq && faq.length
        ? faq.map(({ id, attributes }, index) => {
            const { question, answer } = attributes;
            return (
              <Accordion
                expanded={expanded === `panel${index}`}
                onChange={handleChange(`panel${index}`)}
                className={classes.faq}
              >
                <AccordionSummary
                  expandIcon={
                    <Button className={classes.faq_btn}>
                      <img src="/icons/faq-plus.svg" alt="icon" />
                    </Button>
                  }
                  aria-controls={`panel${index}-content`}
                  id={`panel${index}-content`}
                >
                  <h5>{question}</h5>
                </AccordionSummary>
                <AccordionDetails>
                  <p>{answer}</p>
                </AccordionDetails>
              </Accordion>
            );
          })
        : ""}
    </Container>
  );
}
