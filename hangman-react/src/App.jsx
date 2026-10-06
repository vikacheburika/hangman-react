import { useState } from "react";

import Header from "./components/Header/Header.jsx";
import Keyboard from "./components/Keyboard/Keyboard.jsx";
import UsedKeys from "./components/UsedKeys/UsedKeys.jsx";
import { Word } from "./components/Word/Word.jsx";
import { useEffect } from "react";

import "./App.css";
import axios from "axios";

function App({ step }) {
  const [answer, setAnswer] = useState([]);
  const [guessedOne, setGuessedOne] = useState(false);
  const [guessedTwo, setGuessedTwo] = useState(false);
  const [guessedThree, setGuessedThree] = useState(false);
  const [guessedFour, setGuessedFour] = useState(false);
  const [guessedFive, setGuessedFive] = useState(false);

  const [loading, setLoading] = useState(true);
  const [word, setWord] = useState([]);

  
  const [usedKeys, setUsedKeys] = useState([]);
  
  //Separate variable for word(state var) to solve timing issue
  let selectedWord;

  class Letter {
    constructor(letter, bool) {
      this.answer = letter;
      this.isGuessed = bool;
    }
  }

  // Set answer with extra steps tool ??
  function getWord(word) {
    setAnswer(word);
    console.log("result of setAnswer: " + answer);
  }

  // Word state updater so that it updates separately from rendering
  useEffect(() => {
    const updated = word;
    setAnswer(updated);
  }, [word]);

  // Letters' states logic so that they update separately from rendering
  useEffect(() => {
    if (!word || word.length === 0) console.log("useffect not activated");
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

  // Getting word from API 
  async function handleLoad() {
            // console.log("Word is loading....");
            
            await axios.get("https://random-word-api.herokuapp.com/word?length=5&diff=1")
            .then((response) => {
                console.log("axios OK");
                setLoading(false);
                selectedWord = response.data[0];
                console.log("selected word in axios: ",selectedWord);

                const letters = selectedWord.split("").map((char) => ({
                  answer: char,
                  isGuessed: false,
                }));

                getWord(letters);
                setWord(selectedWord);

            })
            .catch((err) => {
                console.log(err);

                setError(err.message);
                setLoading(false);
    }).finally(() => {
    });

    // To not display loading note
    setLoading(false);

    // Assigning letters values
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

    });

    // console.log("this is result of map nd class: " + letters);
    letters.forEach((letter) => console.log(letter));

    // Making word an array ?
    setWord(letters);
    // ?
    getWord(word);
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
          usedKeys={usedKeys}
          setUsedKeys = {setUsedKeys}
        />

        <UsedKeys
          meow = {usedKeys}
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
