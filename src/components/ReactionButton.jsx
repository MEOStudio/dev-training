import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ReactionButton = (props) => {
  return (
    <button onClick={props.onClick}>
      <FontAwesomeIcon icon={props.icon}></FontAwesomeIcon>
    </button>
  );
};

export default ReactionButton;
