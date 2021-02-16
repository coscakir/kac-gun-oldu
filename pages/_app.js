import React from "react";
import StoreContext from "../store";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  const [applicationDate, setApplicationDate] = React.useState("");

  React.useEffect(() => {
    const applicationDate = localStorage.getItem("startDate");
    if (applicationDate) {
      setApplicationDate(applicationDate);
    }
  }, []);

  const onApplicationDateChanged = (applicationDate) => {
    setApplicationDate(applicationDate);
    localStorage.setItem("startDate", applicationDate);
  };

  return (
    <StoreContext.Provider
      value={{ applicationDate, onApplicationDateChanged }}
    >
      <Component {...pageProps} />
    </StoreContext.Provider>
  );
}

export default MyApp;
