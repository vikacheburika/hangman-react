import {useState} from "react";
import words from "../../assets/wordbank/words.js"

function Word() {
    const [word, setWord] = useState("")

    const handleLoad = () => {
        const randomIndex = Math.floor(Math.random() * 2)
        setWord(words[randomIndex])
    }

    return(
        <>
        <button onClick={handleLoad}>load the word</button>
        <div className="word" >
            <p>word: {word}</p>
        </div>
        </>
    )
}

export default Word