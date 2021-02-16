import React from "react";
import Head from "next/head";
import Input from "../components/input";
import Button from "../components/button";
import {
  differenceInCalendarDays,
  formatDuration,
  intervalToDuration,
  isFuture,
  isValid,
  isMatch,
} from "date-fns";
import { tr } from "date-fns/locale";
import styles from "../styles/Home.module.css";

export default function Home() {
  const [startDate, setStartDate] = React.useState("2020-08-24");
  const [isValidDate, setIsValidDate] = React.useState(true);
  const [days, setDays] = React.useState("");
  const [duration, setDuration] = React.useState("");
  const [fal, setFal] = React.useState("");
  const today = new Date().toISOString().split("T")[0];

  React.useEffect(() => {
    const startDate = localStorage.getItem("startDate");
    if (startDate) {
      setStartDate(startDate);
      setDiffInCalendarDays(startDate);
      setDurationInWords(startDate);
    }
    if (localStorage.getItem("fal")) {
      setFal(localStorage.getItem("fal"));
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      isMatch(startDate, "yyyy-MM-dd") &&
      isValid(new Date(startDate)) &&
      !isFuture(new Date(startDate))
    ) {
      console.log("valid");
      localStorage.setItem("startDate", startDate);
      setDiffInCalendarDays(startDate);
      setDurationInWords(startDate);
    } else {
      setIsValidDate(false);
    }
  };

  const setDiffInCalendarDays = (startDate) => {
    const _diffInCalendarDays = differenceInCalendarDays(
      new Date(),
      new Date(startDate)
    );
    setDays(_diffInCalendarDays);
    localStorage.setItem("differenceInCalendarDays", _diffInCalendarDays);
  };

  const setDurationInWords = (startDate) => {
    const durationInWords = formatDuration(
      intervalToDuration({
        start: new Date(startDate),
        end: new Date(),
      }),
      { locale: tr }
    );
    setDuration(durationInWords);
    localStorage.setItem("durationInWords", durationInWords);
  };

  const handleReset = () => {
    localStorage.clear();
    setStartDate("2020-08-24");
    setIsValidDate(true);
    setDays("");
    setFal("");
  };

  const falimaBak = async () => {
    setFal("bakiyorum.. sakin ol.. hmm. kiz bak, goruyor musun?");
    const res = await fetch("api/fal");
    const data = await res.json();
    setFal(data.sonuc);
    localStorage.setItem("fal", data.sonuc);
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Kaç gün oldu?</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        {days && (
          <div className={styles.grid}>
            <div className={styles.card}>
              <h3>
                {days} Gün!{" "}
                {days < 15 ? (
                  <span>😇</span>
                ) : days < 30 ? (
                  <span>😎</span>
                ) : days < 60 ? (
                  <span>🤔</span>
                ) : days < 90 ? (
                  <span>😕</span>
                ) : days < 120 ? (
                  <span>😔</span>
                ) : days < 150 ? (
                  <span>😤</span>
                ) : days < 180 ? (
                  <span>😡</span>
                ) : (
                  <span>🤬</span>
                )}
              </h3>
              <p>
                Başvurunuzu yapalı <mark>{duration}</mark> olmuş.
              </p>
            </div>
            <div className={styles.card}>
              <h3>
                Vize Falı <span>☕️</span>
              </h3>
              {!fal && (
                <>
                  <p style={{ marginBottom: "1rem" }}>
                    Vizen ne zaman gelir anlamanın tek yolu var.
                  </p>
                  <Button size="sm" onClick={falimaBak}>
                    Falima bak
                  </Button>
                </>
              )}
              {fal && (
                <>
                  <p>{fal}</p>
                </>
              )}
            </div>
          </div>
        )}
        {!days && (
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
              <Button disabled={!startDate} onClick={handleSubmit}>
                Hesapla
              </Button>
            </form>
          </>
        )}
      </main>
      {days && (
        <footer className={styles.footer}>
          <span>
            🍪 Başvuru tarihiniz ({startDate}) {fal ? "ve faliniz" : null}{" "}
            tarayıcı çerezlerine kayıt edildi.
          </span>
          <a onClick={handleReset}>Silmek için buraya tıklayabilirsiniz.</a>
        </footer>
      )}
    </div>
  );
}
