import React from "react";
import cardStyles from "../styles/Card.module.scss";
import ReactionButton from "./ReactionButton";
import { useState, useEffect } from "react";

import {
  faThumbsUp,
  faThumbsDown,
} from "@fortawesome/free-solid-svg-icons";

const Card = (props) => {
  const [likes, setLikes] = useState(0);
  const [imgUrl, setImgUrl] = useState("");
  useEffect(() => {
    const unsplashRandom = async () => {
      const response = await fetch(
        "https://api.unsplash.com/photos/random/?client_id=4hi7fgNG_TmAkLHRrx1b29uPSzSkvrPuwaVi60zr72E"
      );
      return response;
    };
    unsplashRandom()
      .then((data) => {
        return data.json();
      })
      .then((result) => {
        console.log(result.urls.small);
        setImgUrl(result.urls.small);
      });
  }, []);
  return (
    <div className={cardStyles.card}>
      <h2 className={cardStyles.cardHeading}>{props.title}</h2>
      <p className={cardStyles.cardBody}>
        {props.content}, ipsum dolor sit amet consectetur adipisicing
        elit. Doloribus id itaque ad ducimus laborum, hic repudiandae
        harum sapiente beatae odit facere, numquam nobis odio. Impedit
        saepe repudiandae iste illum officia!
      </p>
      {props.children}
      <img src={imgUrl} alt="Icon" width="100%"></img>
      {likes}
      <ReactionButton
        icon={faThumbsUp}
        onClick={() => setLikes(likes + 1)}
      />
      <ReactionButton
        icon={faThumbsDown}
        onClick={() => setLikes(likes - 1)}
      />
    </div>
  );
};

export default Card;
