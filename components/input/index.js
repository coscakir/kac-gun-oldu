import React from "react";
import styles from "./input.module.css";
import cn from "classnames";

export default function Input({ isValid, ...props }) {
  return (
    <label htmlFor={props.id} className={styles.label}>
      <input
        className={cn(styles.input, !isValid ? styles.invalid : styles.valid)}
        {...props}
      />
      {!isValid && (
        <span className={styles.invalidMessage}>
          Lütfen geçerli bir tarih giriniz. Örn: 2020-08-24
        </span>
      )}
    </label>
  );
}
