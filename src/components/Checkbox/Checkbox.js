import React from "react";

import Styles from "./Checkbox.module.scss";

function Checkbox({ label, checked, toggleCheck }) {
  return (
    <label className={Styles.container}>
      {label}
      <input
        type="checkbox"
        checked={checked}
        onChange={toggleCheck}
        name={label}
      />
      <span className={Styles.checkmark}></span>
    </label>
  );
}

export default Checkbox;
