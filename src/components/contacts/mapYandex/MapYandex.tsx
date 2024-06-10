"use client";
import React from "react";
import { YMaps, Map, Placemark } from "@pbe/react-yandex-maps";
import classes from "./styles.module.css";

interface defaultCenterType {
  defaultCenter: number[];
}

export default function MapYandex({ defaultCenter }: defaultCenterType) {
  return (
    <div className={classes.map}>
      <YMaps>
        <Map
          style={{
            width: "100%",
          }}
          className={classes.inner_map}
          defaultState={{ center: defaultCenter, zoom: 16 }}
        >
          <Placemark
            geometry={defaultCenter}
            options={{
              iconLayout: "default#image",
              iconImageHref: "/icons/mapplacemark.svg",
              iconImageSize: [50, 50],
              iconImageOffset: [-15, -30],
            }}
          />
        </Map>
      </YMaps>
    </div>
  );
}
