import Head from "next/head";
import HomeCard from "../components/HomeCard";
import styles from "../styles/Home.module.scss";
import data from "../data/mockup";

import React, { useState } from "react";

export const ExampleContext = React.createContext();

export default function Home() {
  const [darkMode, setDarkMode] = useState({ darkMode: true });
  return (
    <ExampleContext.Provider value={[darkMode, setDarkMode]}>
      <div className={styles.container}>
        <Head>
          <title>Dev Training</title>
          <meta
            name="description"
            content="Training MEO Studio Development"
          />
        </Head>
        <header onClick={() => setDarkMode(!darkMode)}>Home</header>
        <main className={styles.cardContainer}>
          {data.map((elem, index) => (
            <HomeCard
              key={index}
              heading={elem.heading}
              content={elem.content}
              imgUrl={elem.imgUrl}
            />
          ))}
        </main>
      </div>
    </ExampleContext.Provider>
  );
}
