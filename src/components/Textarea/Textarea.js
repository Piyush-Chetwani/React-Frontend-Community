import React from "react";
import Styles from "./Textarea.module.scss";

function Textarea(props) {
  const {
    handleChange,
    label,
    id,
    isRequired,
    footNote,
    ...otherProps
  } = props;
  let inputEl = null;
  if (isRequired) {
    inputEl = (
      <textarea
        className={Styles.inputEl}
        onChange={handleChange}
        {...otherProps}
        required
      />
    );
  } else {
    inputEl = (
      <textarea
        className={Styles.inputEl}
        onChange={handleChange}
        {...otherProps}
      />
    );
  }

  return (
    <div className={Styles.group}>
      <label htmlFor={id} className={Styles.label}>
        {label}
      </label>
      {inputEl}
      {footNote && <p className={Styles.footNote}>{footNote}</p>}
    </div>
  );
}

export default Textarea;
