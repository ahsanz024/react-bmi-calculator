import React from "react";

import styles from "./inputField.module.css";

const InputField = (props) => {
  const { field, setter } = props;
  return (
    <div data-test-input-field className={styles.inputField}>
      <label data-test-input-field-label htmlFor="input">
        {field}
      </label>
      <input
        data-test-input-field-input={field}
        type="number"
        placeholder="0.0"
        name={field}
        onChange={(event) => setter(event.target.value)}
      />
    </div>
  );
};

export default InputField;
