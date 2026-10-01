import Button from "../Button/Button.jsx"
import {useState} from "react";
import Picture from "../Picture/Picture.jsx"
import qwertyLetterKeys from "../../utilities/keys.js";


function Keyboard({compare, guessedOne, setGuessedOne, setGuessedTwo, setGuessedThree, setGuessedFour, setGuessedFive}) {

  let usedKeys = [];
  let keys = qwertyLetterKeys.slice();
  const [letterKeys, setLetterKeys] = useState(keys);
  

  const maxClicks = 11;
  const [step, setStep] = useState(0);

  const handleClick = () => {
    
    setStep(step => {
      if (step + 1 >= maxClicks){
        return 0;
      }
      return step + 1;
    });
  };

  const handleButton = (letter) => {
    console.log("OK");
    console.log(compare);
    var falsy = 0;
                                                                                                                                                                                                                          
    compare.forEach((el, inx) => {
      
      if (el.answer == letter) {
        switch(inx) {
        case 0:
          setGuessedOne(true);
          break;
        case 1:
          setGuessedTwo(true);
          break;
        case 2:
          setGuessedThree(true);
          break;
        case 3:
          setGuessedFour(true);
          break;
        case 4:
          setGuessedFive(true);
          break;
        default:
          console.log("i am compare foreach and i am aware of my existence")
        }
      }
      else{
        falsy+=1;
      }

    })
    console.log(falsy);
    console.log(usedKeys);
    
    
    if (falsy == 5) {
      handleClick();
    }
    console.log("this is after press key: "+guessedOne);

  }

  // Used keys deleter
  const deleteUsed = (inx, el) => {
    console.log("Delete Used works");

    setLetterKeys(letterKeys => {
      // Remove element from keyboard
      letterKeys.splice(inx, 1);
      // Add to Used Keys
      usedKeys.push(el);

      console.log(letterKeys);
      console.log(usedKeys);

      return letterKeys;
    }) 
    
  }

  return (
    <>
      
    <Picture step={step} />

      <div className="wrong">
        <Button onClick={handleClick} />
      </div>


      <div className="keyboard">
        {letterKeys.map((letter, index) => (
          <button key={index} type="button" className="btn btn-danger" onClick={() => {
            handleButton(letter); 
            deleteUsed(index, letter);
          }}>{letter}</button>
        ))}
      </div>
      
      </>
  );
}

export default Keyboard