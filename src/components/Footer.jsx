import React from "react";

import packageJson from "../../package.json";
import styles from "./footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div>Version: {packageJson.version}</div>
      <a target="/" href="https://github.com/ahsanz024/react-bmi-calculator">
        https://github.com/ahsanz024/react-bmi-calculator
      </a>
    </footer>
  );
};

export default Footer;
