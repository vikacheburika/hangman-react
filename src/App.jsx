import {useState} from "react";

import Header from "./components/Header/Header.jsx"
import Picture from "./components/Picture/Picture.jsx"
import Button from "./components/Button/Button.jsx"

import './App.css'

function App() {
  const [step, setStep] = useState(0);

  const handleClick = () => {
    setStep(step => step + 1);
  };

  return (
    <>
      <Header/>
      
      <Picture step={step} />

      <Button onClick={handleClick} />
      </>
  );
}

export default App;
