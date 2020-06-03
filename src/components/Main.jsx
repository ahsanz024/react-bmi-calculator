import React, { useState, useEffect } from "react";
import InputField from "./InputField";
import Toggle from "./Toggle";

import styles from "./main.module.css";
import appStyles from "../app.module.css";

const Body = () => {
  const [bmi, setBmi] = useState(0);
  const [isImperial, setImperial] = useState(false);

  const [height, setHeight] = useState(0);
  const [heightUnit, setHeightUnit] = useState("cm");
  const [weight, setWeight] = useState(0);
  const [weightUnit, setWeightUnit] = useState("lbs");

  useEffect(() => {
    setWeightUnit(isImperial ? "lbs" : "kgs");
    setHeightUnit(isImperial ? "in" : "cm");

    const imperialMultiplier = isImperial ? 703 : 1;
    const heightMultiplier = isImperial ? 1 : 0.01;

    const heightSquared = parseFloat(Math.pow(height * heightMultiplier, 2));

    const bmi = parseFloat((weight * imperialMultiplier) / heightSquared);
    if (Number.isNaN(bmi) || !Number.isFinite(bmi)) {
      setBmi(0);
    } else {
      setBmi(bmi.toFixed(2));
    }
  }, [height, weight, isImperial]);

  const resetForm = () => {
    setBmi(0);
    setHeight(0);
    setWeight(0);
  };

  return (
    <div className={`${styles.main} ${appStyles.container}`}>
      Body Mass Index (BMI) = {bmi}
      <Toggle left="Metric" right="Imperial" changeHandler={setImperial} />
      <form action="bmi">
        <InputField field={`Weight (${weightUnit})`} setter={setWeight} />
        <InputField field={`Height (${heightUnit})`} setter={setHeight} />

        <button
          type="reset"
          className={`${appStyles.theme} ${appStyles.darkText}`}
          onClick={resetForm}
        >
          Reset
        </button>
      </form>
    </div>
  );
};

export default Body;
