import React from "react";
import delay from "../../utils/delay";
import Button from "../button";
import Card from "../card";
import styles from "./fal-bak.module.css";

export default function FalBak() {
  const [fal, setFal] = React.useState({});

  React.useEffect(() => {
    try {
      const _fal = JSON.parse(localStorage.getItem("fal"));
      if (_fal) {
        setFal(_fal);
      }
    } catch (e) {
      localStorage.removeItem("fal");
    }
  }, []);

  const handleSubmit = async () => {
    setFal({ replik: "bakiyorum.. sakin ol.. hmm. kiz bak, goruyor musun?" });
    await delay(2000);
    const res = await fetch("api/fal-bak");
    const data = await res.json();
    setFal(data.sonuc);
    localStorage.setItem("fal", JSON.stringify(data.sonuc));
  };

  return (
    <Card>
      <h3>
        Vize Falı <span>☕️</span>
      </h3>
      {!fal.replik && (
        <>
          <p style={{ marginBottom: "1rem" }}>
            Vizen ne zaman gelir anlamanın tek yolu var.
          </p>
          <Button size="sm" onClick={handleSubmit}>
            Falıma bak
          </Button>
        </>
      )}
      {fal.replik && (
        <>
          <p>{fal.replik}</p>
          {fal.falci && (
            <span className={styles.falci}>falcı: {fal.falci}</span>
          )}
        </>
      )}
    </Card>
  );
}
