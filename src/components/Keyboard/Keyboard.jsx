import Button from "../Button/Button.jsx"
import {useState} from "react";
import Picture from "../Picture/Picture.jsx"

function Keyboard() {
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

  return (
    <>
      
    <Picture step={step} />

      <div className="wrong">
        <Button onClick={handleClick} />
      </div>
      
      </>
  );
}

export default Keyboard