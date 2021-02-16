import React from "react";
import StoreContext from "../../store";
import Image from "next/image";
import styles from "./footer.module.css";

export default function Footer() {
  const { applicationDate, onApplicationDateChanged } = React.useContext(
    StoreContext
  );

  const handleReset = () => {
    localStorage.clear();
    onApplicationDateChanged("");
  };

  return (
    <footer className={styles.footer}>
      {applicationDate && (
        <>
          <span>
            🍪 Başvuru tarihiniz ({applicationDate}) tarayıcı çerezlerine kayıt
            edildi.
          </span>
          <a onClick={handleReset}>Silmek için buraya tıklayabilirsiniz.</a>
        </>
      )}

      <a
        href="https://github.com/coskuncakir/kac-gun-oldu"
        target="_blank"
        rel="noopener noreferrer"
        className={styles.github}
      >
        <Image src="/github.svg" alt="GitHub" width={24} height={24} />
      </a>
    </footer>
  );
}
