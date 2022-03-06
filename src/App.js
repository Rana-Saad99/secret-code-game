import './App.css';
import Row from "./Components/Row";
import React from "react";
import Start from "./Components/Start";
import InputContextProvider from "./Components/InputContext";
import RowList from "./Components/RowList";
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
