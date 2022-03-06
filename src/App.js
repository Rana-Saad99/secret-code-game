import './App.css';
import React from "react";
import InputContextProvider from "./Components/InputContext";
import GuessCodeContent from "./Components/GuessCodeContent";

function App() {
  return (
      <InputContextProvider>
        <div className="App">
          <header className="App-header">
            <h1> Find The Secret Code</h1>
            <GuessCodeContent/>
          </header>
        </div>
      </InputContextProvider>
  );
}

export default App;
