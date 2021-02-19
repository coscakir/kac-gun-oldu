import React from "react";
import Input from "../input";
import Button from "../button";
import { isFuture, isValid, isMatch } from "date-fns";
import StoreContext from "../../store";
import styles from "./diff-form.module.css";

export default function DiffForm() {
  const { onApplicationDateChanged } = React.useContext(StoreContext);
  const [isValidDate, setIsValidDate] = React.useState(true);
  const [startDate, setStartDate] = React.useState("2020-08-24");
  const today = new Date().toISOString().split("T")[0];

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      isMatch(startDate, "yyyy-MM-dd") &&
      isValid(new Date(startDate)) &&
      !isFuture(new Date(startDate))
    ) {
      localStorage.setItem("startDate", startDate);
      onApplicationDateChanged(startDate);
    } else {
      setIsValidDate(false);
    }
  };

  return (
    <>
      <h1 className={styles.title}>Kaç gün oldu 🙈</h1>
      <p className={styles.description}>Ne zaman başvurdunuz?</p>
      <form className={styles.form}>
        <Input
          name="date"
          id="date"
          value={startDate}
          type="date"
          max={today}
          onChange={(e) => setStartDate(e.target.value)}
          placeholder="yyyy-mm-dd"
          isValid={!isValidDate ? false : true}
        />
        <Button onClick={handleSubmit}>Enter</Button>
      </form>
    </>
  );
}
