import React, { useState } from "react";
import _ from "lodash";

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
    //console.log(`${c} has been activated`);

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
    const findScore = (sc) => {
      const scores = {
        a: 1,
        b: 4,
        c: 8,
        d: 1,
        e: 1,
        f: 3,
        g: 2,
        h: 2,
        i: 1,
        j: 7,
        k: 2,
        l: 1,
        m: 2,
        n: 1,
        o: 2,
        p: 4,
        q: 1,
        r: 1,
        s: 1,
        t: 1,
        u: 4,
        v: 3,
        w: 4,
        x: 8,
        y: 7,
        z: 10,
      };
      let score = 0;
      for (let letter of sc) {
        score += scores[letter];
      }
      return score;
    };
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
