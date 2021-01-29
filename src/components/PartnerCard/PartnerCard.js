import React from "react";
import styles from "./PartnerCard.modules.css";
import {Link} from "react-router-dom";
const PartnerCard = (props) => {
  return (
    <Link
      to={props.link}
      style={{ textDecoration: "none" }}
      // target="_blank"
      // rel="noopener noreferrer"
    >
      <div className={styles.container}>
        {props.symbol}
        <div className={styles.bgVec} style={{ right: props.right }}>
          {props.background}
        </div>
        <div className={styles.heading}>{props.heading}</div>
        <div className={styles.description}>{props.description}</div>
      </div>
    </Link>
  );
};

export default PartnerCard;
