import Button from "../Button/Button.jsx"
import {useState} from "react";
import Picture from "../Picture/Picture.jsx"
import qwertyLetterKeys from "../../utilities/keys.js";
import usedKeys from "../UsedKeys/UsedKeys.jsx";


function Keyboard({compare, setGuessedOne, setGuessedTwo, setGuessedThree, setGuessedFour, setGuessedFive, setUsedKeys}) {

  let keys = qwertyLetterKeys.slice();
  const [letterKeys, setLetterKeys] = useState(keys);
  
  const maxClicks = 11;
  const [step, setStep] = useState(0);

  // Used keys deleter
  const deleteUsed = (inx, el) => {
    console.log("Delete Used works");

    setLetterKeys(letterKeys => {
      // Remove element from keyboard
      letterKeys.splice(inx, 1);

      console.log(letterKeys);
      console.log(usedKeys);

      console.log("i am set letter keys func");

      return letterKeys;
      
    }) 
    console.log("NO OK")
      // Add to Used Keys
      setUsedKeys(usedKeys => {
        console.log(usedKeys)
        return [...usedKeys, el]
      })
    
  }

  const handleClick = (inx, el) => {
     // DELETE USED SIUDA

    deleteUsed(inx, el)
    
    setStep(step => {
      if (step + 1 >= maxClicks){
        return 0;
      }
      return step + 1;
    });
  };

  const handleButton = (index, letter) => {
    console.log("OK");
    console.log(compare);
    let falsy = 0;
                                                                                                                                                                                                                          
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
    
    if (falsy == 5) {
      handleClick(index, letter);
    }

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
            handleButton(index, letter); 
          }}>{letter}</button>
        ))}
      </div>
      
      </>
  );
}

export default Keyboard