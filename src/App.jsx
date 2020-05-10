import React from 'react';
import './App.css';
import './Styles.css';
import Main from './components/Main';
import Footer from './components/Footer';

function App() {
  return (
    <div className="app">
      <header className="App-header theme container dark-text">
        <div>BMI Healthy Weight Calculator</div>
      </header>
      <Main/>

      <Footer/>
    </div>
  );
}

export default App;
