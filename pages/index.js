import React from "react";
import StoreContext from "../store";
import Layout from "../components/layout";
import Head from "next/head";
import FalBak from "../components/fal-bak";
import DiffForm from "../components/diff-form";
import DiffCard from "../components/diff-card";
import styles from "../styles/Home.module.css";

export default function Home() {
  const { applicationDate } = React.useContext(StoreContext);

  return (
    <Layout>
      <Head>
        <title>Kaç gün oldu?</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {applicationDate && (
        <div className={styles.grid}>
          <DiffCard />
          <FalBak />
        </div>
      )}

      {!applicationDate && <DiffForm />}
    </Layout>
  );
}
