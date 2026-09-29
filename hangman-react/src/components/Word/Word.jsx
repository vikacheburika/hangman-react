import { useState } from "react";
import { useEffect } from "react";
import words from "../../utilities/words.js";
import axios from "axios";

function Word({ loading, getWord, guessedOne, guessedTwo,  guessedThree, guessedFour, guessedFive, word, handleLoad}) {
  

  const [data, setData] = useState([]);
  
  const [error, setError] = useState(null);
  

// Function that is called on click of Load the word button, sets the word
  

// FUnction that depending on if the letter is guessed or not either returns it or "-"
  // function getDisplayChar(index) {
  //   const letterObj = word[index];
  //   console.log(letterObj + " miau");
    
  //   return letterObj && letterObj.isGuessed ? letterObj.answer : "_";
  // }

  function display() {
    return (
      <div className="word">
          <p>
            word: {word[0].isGuessed?word[0].answer:"_"} {word[1].isGuessed?word[1].answer:"_"} {word[2].isGuessed?word[2].answer:"_"} {word[3].isGuessed?word[3].answer:"_"} {word[4].isGuessed?word[4].answer:"_"}  
          </p>
        </div>
    );
  }

  return (
    <>
      <div className="word-box">
        <button type="button" className="btn btn-primary" onClick={handleLoad}>
          load the word
        </button>
        
        {loading? "press button": display()}
      </div>
    </>
  );
}

export { Word };
