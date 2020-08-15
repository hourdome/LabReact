import React from "react";
import "./App.css";
import WordCard from "./WordCard";

const letter = "abcdefghijklmnopqrstuvwxyz";

function App() {
  return (
    <div>
      <header className="textAlign">
        <h1>Enter any word to get the most points.</h1>
        <h2>Score</h2>
        <h2 id="addScore"></h2>
        <p className="textAlign" id="addText"></p>
      </header>
      {<WordCard value={letter} />}

      <button className="bt" id="enter">
        Enter
      </button>
    </div>
  );
}

export default App;
