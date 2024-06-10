import React, { ReactNode } from 'react'
import classes from "./styles.module.css"

interface ContainerProps {
    children: ReactNode,
    className?: string
}

export default function Container({ children, className }: ContainerProps) {
    return (
        <div className={`${classes.container} ${className}`}>{children}</div>
    )
}
