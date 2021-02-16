import React from "react";
import delay from "../../utils/delay";
import Button from "../button";
import Card from "../card";

export default function FalBak() {
  const [fal, setFal] = React.useState("");

  React.useEffect(() => {
    const _fal = localStorage.getItem("fal");
    if (_fal) {
      setFal(_fal);
    }
  }, []);

  const handleSubmit = async () => {
    setFal("bakiyorum.. sakin ol.. hmm. kiz bak, goruyor musun?");
    await delay(2000);
    const res = await fetch("api/fal-bak");
    const data = await res.json();
    setFal(data.sonuc);
    localStorage.setItem("fal", data.sonuc);
  };

  return (
    <Card>
      <h3>
        Vize Falı <span>☕️</span>
      </h3>
      {!fal && (
        <>
          <p style={{ marginBottom: "1rem" }}>
            Vizen ne zaman gelir anlamanın tek yolu var.
          </p>
          <Button size="sm" onClick={handleSubmit}>
            Falıma bak
          </Button>
        </>
      )}
      {fal && (
        <>
          <p>{fal}</p>
        </>
      )}
    </Card>
  );
}
