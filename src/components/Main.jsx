import React, { useState, useEffect } from "react";
import InputField from "./InputField";
import Toggle from "./Toggle";
import BmiRanges from "./BmiRanges";

import styles from "./main.module.css";
import appStyles from "../app.module.css";

const Body = () => {
  const [bmi, setBmi] = useState(0);
  const [isImperial, setImperial] = useState(false);

  const [bmiStatus, setBmiStatus] = useState("");
  const [sliderPercentage, setSliderPercentage] = useState(0);
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

  useEffect(() => {
    Object.keys(BmiRanges)
      .reverse()
      .forEach(function (k) {
        if (bmi <= BmiRanges[k]) {
          setBmiStatus(k);
          const diffPercentage = ((bmi - 23) * 100) / 23;
          const centerPercentage = 23; // Value from the scale "Normal position"
          let positionPercentage = centerPercentage + diffPercentage;

          if (positionPercentage > 100) {
            positionPercentage = 100;
          } else if (positionPercentage < 0) {
            positionPercentage = 0;
          }
          setSliderPercentage(positionPercentage);
        }
      });
  }, [bmi]);

  const resetForm = () => {
    setBmi(0);
    setHeight(0);
    setWeight(0);
  };

  return (
    <div className={`${styles.main} ${appStyles.container}`}>
      <h4 className={styles.title}> Body Mass Index (BMI)</h4>
      <h5 className={styles.bmiStatus}>
        {bmi === 0 ? "" : bmi} {bmi === 0 ? "" : `[${bmiStatus}]`}
      </h5>
      <div className={styles.slider}>
        <p className={styles.label}>Underweight</p>
        <div className={styles.scaleBlock}>
          <div className={styles.scale} />
          <div
            className={styles.arrow}
            style={{ left: `calc(${sliderPercentage}% - 10px)` }}
          />
        </div>
        <p className={styles.label}>Obese</p>
      </div>
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
