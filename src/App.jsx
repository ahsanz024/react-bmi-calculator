import React from "react";
// import "./App.css";
import styles from "./app.module.css";
import Main from "./components/Main";
import Footer from "./components/Footer";

function App() {
  return (
    <div className={styles.app}>
      <header
        className={`${styles.header} ${styles.theme} ${styles.container} ${styles.darkText}`}
      >
        {/* // "App-header theme container dark-text"> */}
        <div>BMI Healthy Weight Calculator</div>
      </header>
      <Main />

      <Footer />
    </div>
  );
}

export default App;
