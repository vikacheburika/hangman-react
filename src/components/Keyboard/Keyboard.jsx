import Button from "../Button/Button.jsx"
import {useState} from "react";
import Picture from "../Picture/Picture.jsx"
import qwertyLetterKeys from "../../utilities/keys.js";
// import { data } from "../Word/Word.jsx";


function Keyboard({compare}) {
  const maxClicks = 11;
  const [step, setStep] = useState(0);

  const handleButton = (letter) => {
    console.log("OK");
                                                                                                                                                                                                                          
    compare.forEach((el) => {
      
      if (el.answer == letter) {
        el.isGuessed = true;
      }
    })
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