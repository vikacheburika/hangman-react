import { useState } from "react";
import words from "../../assets/wordbank/words.js";
import Letters from "../Letters/Letters.jsx";

function Word() {
  const [word, setWord] = useState("");

  const handleLoad = () => {
    const randomIndex = Math.floor(Math.random() * 2);
    const selectedWord = words[randomIndex];
    const letters = selectedWord.split("").map((char) => ({
      answer: char,
      isGuessed: false,
    }));

    setWord(letters)
  };

  function getDisplayChar(index) {
    const letterObj = word[index];
    return letterObj && letterObj.isGuessed ? letterObj.answer : "_";
}

  function display() {
    
      return (
        <div className="word">
          <Letters
            letter1={getDisplayChar(0)}
            letter2={getDisplayChar(1)}
            letter3={getDisplayChar(2)}
            letter4={getDisplayChar(3)}
            letter5={getDisplayChar(4)}
          />
        </div>
      )
    
  }

  return (
    <>
      <div className="word-box">
        <button onClick={handleLoad}>load the word</button>
        {display()}
      </div>

      
    </>
  );
}

export default Word;
