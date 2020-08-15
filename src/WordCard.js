import React, { useState } from "react";
import _, { attempt } from "lodash";

import CharacterCard from "./CharacterCard";

const prepareStateFromWord = (given_word) => {
  let word = given_word.toUpperCase();
  let chars = _.shuffle(Array.from(word));
  return {
    word,
    chars,
    attempt: 1,
    guess: "",
    completed: false,
    score: 0,
  };
};

export default function WordCard(props) {
  const [state, setState] = useState(prepareStateFromWord(props.value));

  const activationHandler = (c) => {
    console.log(`${c} has been activated`);

    let guess = state.guess + c;
    setState({ ...state, guess });

    document.getElementById("enter").addEventListener("click", function () {
      document.getElementById("addText").textContent = guess;
      state.score += guess.length;
      document.getElementById("addScore").textContent = state.score;
      setState({ ...state, guess: "", attempt: state.attempt + 1 });
    });

    /* if (guess.length == state.word.length) {
      if (guess == state.word) {
        console.log("yeah!");
        setState({ ...state, guess: "", completed: true });
      } else {
        console.log("reset, next attempt");
        setState({ ...state, guess: "", attempt: state.attempt + 1 });
      }
    } */
  };

  return (
    <div>
      {state.chars.map((c, i) => (
        <CharacterCard
          value={c}
          key={i}
          activationHandler={activationHandler}
          attempt={state.attempt}
        />
      ))}
    </div>
  );
}
