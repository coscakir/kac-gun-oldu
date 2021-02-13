import React from "react";
import styles from "./input.module.css";

export default function Input({ ...props }) {
  return (
    <label htmlFor={props.id} className={styles.label}>
      <input className={styles.input} {...props} />
    </label>
  );
}
