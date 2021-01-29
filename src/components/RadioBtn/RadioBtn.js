import React from "react";

import Styles from "./RadioBtn.module.scss";

function RadioBtn({ name, label, checked, toggleCheck, value }) {
  return (
    <label className={Styles.container}>
      {label}
      <input
        type="radio"
        checked={checked}
        onChange={toggleCheck}
        name={name}
        value={value}
      />
      <span className={Styles.checkmark}></span>
    </label>
  );
}

export default RadioBtn;
