import React from "react";
import styles from "./toggle.module.css";
import appStyles from "../app.module.css";

const Toggle = (props) => {
  const { right, left, changeHandler } = props;

  return (
    <div className={styles.toggle}>
      <p>{left}</p>
      <label className={styles.label}>
        <input
          type="checkbox"
          onChange={(event) => changeHandler(event.target.checked)}
        />
        <span className={`${styles.slider} ${appStyles.theme}`} />
      </label>
      <p>{right}</p>
    </div>
  );
};

export default Toggle;
