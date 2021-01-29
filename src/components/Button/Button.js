import React from "react";
import styles from "./Button.module.css";

function Button(props) {
  return (
    <div
      className={styles.button}
      style={{
        fontSize: `${props.fontSize}`,
        padding: `${props.padding}`,
        color: `${props.textColor}`,
        backgroundColor: `${props.bgColor}`,
        borderRadius: `${props.borderRadius}`,
        boxShadow: `${props.boxShadow}`,
        fontWeight:`${props.fontWeight ? props.fontWeight : "normal" }`,
        width:`${props.width}`

      }}
    >
      {props.children}
    </div>
  );
}

export default Button;
