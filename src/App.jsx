import {useState} from "react";

import Header from "./components/Header/Header.jsx"
import Picture from "./components/Picture/Picture.jsx"
import Keyboard from "./components/Keyboard/Keyboard.jsx"
import Word from "./components/Word/Word.jsx"

import './App.css'

function App({step}) {
  
  return(
    <>
    <Header name="stranger" content="learning"/>
      
      <div className="content">
      <Keyboard/>

      <Word/>
      </div>
      
    </>
  )
}

export default App;
