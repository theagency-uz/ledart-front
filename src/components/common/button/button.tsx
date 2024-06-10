import React from "react";


import classes from "./styles.module.css";
import Link from "next/link";

export default function Button({ children, href, onClick, className }: { children: React.ReactNode, href: string, onClick: () => void, className?: string }) {
  if (href) {
    return (
      <Link href={href} className={`${classes.button_component} ${className}`}>
        {children}
      </Link>
    );
  }
  return (
    <button onClick={onClick} className={`${classes.button_component} ${className}`}>
      {children}
    </button>
  );
}
