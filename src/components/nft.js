import React from "react";
import styles from "./pictures/nft.module.css";
import view from "./images/icon-view.svg";

function Picture() {
  return (
    <div className={styles.nft}>
      <div className={styles.color}>
        <img src={view} alt="some imij" />
      </div>
    </div>
  );
}

export default Picture;
