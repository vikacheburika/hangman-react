import Button from "../Button/Button.jsx"
import {useState} from "react";
import Picture from "../Picture/Picture.jsx"
import qwertyLetterKeys from "../../utilities/keys.js";
// import { data } from "../Word/Word.jsx";


function Keyboard({compare, guessedOne, setGuessedOne, setGuessedTwo, setGuessedThree, setGuessedFour, setGuessedFive}) {
  const maxClicks = 11;
  const [step, setStep] = useState(0);

  const handleButton = (letter) => {
    console.log("OK");
    console.log(compare);
                                                                                                                                                                                                                          
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
        // el.isGuessed = true;
      }
    })
    console.log("this is after press key: "+guessedOne);
    
  }

  const handleClick = () => {
    
    setStep(step => {
      if (step + 1 >= maxClicks){
        return 0;
      }
      return step + 1;
    });
  };



  return (
    <>
      
    <Picture step={step} />

      <div className="wrong">
        <Button onClick={handleClick} />
      </div>


      <div className="keyboard">
        {qwertyLetterKeys.map((letter, index) => (
          <button key={index} type="button" className="btn btn-danger" onClick={() => handleButton(letter)}>{letter}</button>
        ))}
      </div>
      
      </>
  );
}

export default Keyboard