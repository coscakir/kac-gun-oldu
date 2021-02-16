import React from "react";
import cn from "classnames";
import styles from "./button.module.css";

export default function Button({ size, children, ...props }) {
  return (
    <button
      className={cn(styles.button, size ? styles[size] : null)}
      {...props}
    >
      {children}
    </button>
  );
}
