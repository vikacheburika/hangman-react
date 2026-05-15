import { useState } from "react";

import Header from "./components/Header/Header.jsx";
import Picture from "./components/Picture/Picture.jsx";
import Keyboard from "./components/Keyboard/Keyboard.jsx";
import { Word } from "./components/Word/Word.jsx";
import { useEffect } from "react";

import "./App.css";

function App({ step }) {
  const [answer, setAnswer] = useState([]);
  const [guessedOne, setGuessedOne] = useState(false);
  const [guessedTwo, setGuessedTwo] = useState(false);
  const [guessedThree, setGuessedThree] = useState(false);
  const [guessedFour, setGuessedFour] = useState(false);
  const [guessedFive, setGuessedFive] = useState(false);

  const [loading, setLoading] = useState(true);
  const [word, setWord] = useState([]);

  class Letter {
    constructor(letter, bool) {
      this.answer = letter;
      this.isGuessed = bool;
    }
  }

  useEffect(() => {
    const updated = word;
    setAnswer(updated);
  }, [word]);

  useEffect(() => {
    if (!word || word.length === 0) console.log("useffect nono do");
    else {
      const letterStates = [
        guessedOne,
        guessedTwo,
        guessedThree,
        guessedFour,
        guessedFive,
      ];
      const updated = word.map((el, inx) => ({
        ...el,
        isGuessed: letterStates[inx],
      }));
      setWord(updated);
      setAnswer(updated);
    }
  }, [guessedOne, guessedTwo, guessedThree, guessedFour, guessedFive]);

  async function handleLoad() {
    // axios
    //         .get("https://random-word-api.herokuapp.com/word?length=5&diff=1")
    //         .then((response) => {
    //             console.log("OK");
    //             setLoading(false);
    //             let selectedWord = response.data[0];
    //             console.log(selectedWord);

    //             const letters = selectedWord.split("").map((char) => ({
    //               answer: char,
    //               isGuessed: false,
    //             }));

    //             getWord(letters);
    //             setWord(selectedWord)

    //         })
    //         .catch((err) => {
    //             console.log(err);

    //             setError(err.message);
    //             setLoading(false);
    // });

    setLoading(false);
    let selectedWord = "query";
    console.log(selectedWord);

    const letters = selectedWord.split("").map((char, inx) => {
      switch (inx) {
        case 0:
          return new Letter(char, guessedOne);
        case 1:
          return new Letter(char, guessedTwo);
        case 2:
          return new Letter(char, guessedThree);
        case 3:
          return new Letter(char, guessedFour);
        case 4:
          return new Letter(char, guessedFive);
        default:
          return null;
      }

      // switch(inx) {
      //   case 0:
      //     return {
      //       answer: char,
      //       isGuessed: guessedOne,
      //     };
      //   case 1:
      //     return {
      //       answer: char,
      //       isGuessed: guessedTwo,
      //     };
      //   case 2:
      //     return {
      //       answer: char,
      //       isGuessed: guessedThree,
      //     };
      //   case 3:
      //     return {
      //       answer: char,
      //       isGuessed: guessedFour,
      //     };
      //   case 4:
      //     return {
      //       answer: char,
      //       isGuessed: guessedFive,
      //     };
      //   default:
      //     return null;
      // }

      // answer: char,
      // isGuessed: false,
    });

    console.log("this is result of map nd class: " + letters);
    letters.forEach((letter) => console.log(letter));

    setWord(letters);
    getWord(word);
  }

  function getWord(word) {
    setAnswer(word);
    console.log("result of setAnswer: " + answer);
  }

  return (
    <>
      <Header name="stranger" content="learning" />

      <div className="content">
        <Keyboard
          guessedOne={guessedOne}
          compare={answer}
          setGuessedOne={setGuessedOne}
          setGuessedTwo={setGuessedTwo}
          setGuessedThree={setGuessedThree}
          setGuessedFour={setGuessedFour}
          setGuessedFive={setGuessedFive}
        />

        <Word
          loading={loading}
          getWord={getWord}
          guessedOne={guessedOne}
          guessedTwo={guessedTwo}
          guessedThree={guessedThree}
          guessedFour={guessedFour}
          guessedFive={guessedFive}
          handleLoad={handleLoad}
          word={word}
        />
      </div>
    </>
  );
}

export default App;
