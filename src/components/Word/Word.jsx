import { useState } from "react";
import { useEffect } from "react";
import words from "../../utilities/words.js";
import Letters from "../Letters/Letters.jsx";
import axios from "axios";

function Word({getWord}) {
  const [word, setWord] = useState("");

  const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    
    useEffect(() => {
        // Make GET request to fetch data
        
    }, []);

    // if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

  async function handleLoad(){
    axios
            .get("https://random-word-api.herokuapp.com/word?length=5&diff=1")
            .then((response) => {
                console.log("OK");
                setLoading(false);
                let selectedWord = response.data[0];
                console.log(selectedWord);
                
                const letters = selectedWord.split("").map((char) => ({
                  answer: char,
                  isGuessed: false,
                }));

                getWord(letters);
                setWord(selectedWord)
                
            })
            .catch((err) => {
                console.log(err);
                
                setError(err.message);
                setLoading(false);
    });
    
    
  };

  function getDisplayChar(index) {
    const letterObj = word[index];
    
    
    return letterObj && letterObj.isGuessed ? letterObj.answer : "_";
}



  function display() {
    
      return (
        <div className="word">
          <Letters
            letter1={getDisplayChar(0)}
            letter2={getDisplayChar(1)}
            letter3={getDisplayChar(2)}
            letter4={getDisplayChar(3)}
            letter5={getDisplayChar(4)}
          />
        </div>
      )
    
  }

  return (
    <>
      <div className="word-box">
        <button type="button" className="btn btn-primary" onClick={handleLoad}>load the word</button>
        {display()}
      </div>

      
    </>
  );
}


export {Word} ;



