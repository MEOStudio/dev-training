import Image from "next/image";
import styles from "../styles/HomeCard.module.scss";
import React from "react";
import { ExampleContext } from "../pages";

const HomeCard = (props) => {
  let [darkMode, setDarkMode] = React.useContext(ExampleContext);
  return (
    <section
      className={darkMode ? styles.container : styles.lightContainer}
      onClick={() => {
        setDarkMode(!darkMode);
      }}
    >
      <h1 className={styles.heading}>{props.heading}</h1>
      <p>
        {props.content}, ipsum dolor sit, amet consectetur adipisicing
        elit. Repellendus facilis nulla doloribus dicta hic animi
        officia voluptas obcaecati, quo deserunt dolorem eos veniam,
        facere inventore eligendi cupiditate accusamus? Porro, est.
      </p>
      <div className={styles.imageContainer}>
        <Image
          src={props.imgUrl}
          layout="fill"
          alt="Nature"
          objectFit="cover"
          objectPosition="center"
        ></Image>
      </div>
    </section>
  );
};

export default HomeCard;
