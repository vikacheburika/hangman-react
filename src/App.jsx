import {useState} from "react";

import Header from "./components/Header/Header.jsx"
import Picture from "./components/Picture/Picture.jsx"
import Button from "./components/Button/Button.jsx"

import './App.css'

function App() {
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
      <Header/>
      
      <Picture step={step} />
      <div className="wrong">
        <Button onClick={handleClick} />
      </div>
      
      </>
  );
}

export default App;
