import React from "react";
import "./App.css";
import CharacterCard from "./CharacterCard";
import WordCard from "./WordCard";

const letter = "abcdefghijklmnopqrstuvwxyz";

function App() {
  return (
    <div>
      <header>
        <h1 className="textAlign">Will equate as many words as possible</h1>
      </header>
      {<WordCard value={letter} />}
      <button className="bt">Enter</button>
    </div>
  );
}

export default App;
