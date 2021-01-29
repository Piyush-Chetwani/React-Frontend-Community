import React, { useState } from "react";

import Styles from "./Input.module.scss";

import { emailValidation, phoneValidation } from "../../utils/validations";

function InputElement(props) {
  const [showEmptyWarning, setShowEmptyWarning] = useState(false);
  const [showValidationWarning, setShowValidationWarning] = useState(false);
  const {
    handleChange,
    label,
    id,
    isRequired,
    footNote,
    showWarning,
    refProp,
    ...otherProps
  } = props;
  const labelStar = isRequired ? (
    <span className={Styles.labelStar}>&nbsp;*</span>
  ) : null;
  const emptyWarning = "This is a required field";
  let validationWarning = null;
  if (id === "email") {
    validationWarning = "Please Enter  a valid email address";
  } else if (id === "contact") {
    validationWarning = "Please Enter  a valid Contact Number";
  }

  const handleLocalStateChange = (event) => {
    if (event.target.value.length > 0) {
      if (validationWarning) {
        if (
          (id === "email" && !emailValidation(event.target.value)) ||
          (id === "contact" && !phoneValidation(event.target.value))
        ) {
          setShowEmptyWarning(false);
          setShowValidationWarning(true);
        } else {
          setShowEmptyWarning(false);
          setShowValidationWarning(false);
        }
      } else {
        setShowEmptyWarning(false);
        setShowValidationWarning(false);
      }
    } else {
      setShowEmptyWarning(true);
      setShowValidationWarning(false);
    }
    handleChange(event);
  };

  let classN = null;
  if (showWarning || showEmptyWarning || showValidationWarning) {
    classN = `${Styles.inputEl} ${Styles.showWarning}`;
  } else {
    classN = `${Styles.inputEl}`;
  }
  return (
    <div className={Styles.group}>
      <label htmlFor={id} className={Styles.label}>
        {label}
        {labelStar}
      </label>
      {isRequired ? (
        refProp ? (
          <input
            className={classN}
            onChange={handleLocalStateChange}
            {...otherProps}
            required
            ref={refProp}
          />
        ) : (
          <input
            className={classN}
            onChange={handleLocalStateChange}
            {...otherProps}
            required
          />
        )
      ) : refProp ? (
        <input
          className={classN}
          onChange={handleLocalStateChange}
          {...otherProps}
          ref={refProp}
        />
      ) : (
        <input
          className={classN}
          onChange={handleLocalStateChange}
          {...otherProps}
        />
      )}
      {footNote && <p className={Styles.footNote}>{footNote}</p>}
      {(showEmptyWarning || showWarning) && (
        <p className={Styles.warning}>{emptyWarning}</p>
      )}
      {showValidationWarning && (
        <p className={Styles.warning}>{validationWarning}</p>
      )}
    </div>
  );
}

export default InputElement;
