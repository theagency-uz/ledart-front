import React from "react";

export default function Burger({
  lng,
  children,
}: {
  lng: string;
  children: React.ReactNode;
}) {
  return <div>{children}</div>;
}
