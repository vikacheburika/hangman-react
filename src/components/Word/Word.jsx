import { useState } from "react";
import { useEffect } from "react";
import words from "../../utilities/words.js";
import Letters from "../Letters/Letters.jsx";
import axios from "axios";

function Word() {
  const [word, setWord] = useState("");

  const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        // Make GET request to fetch data
        axios
            .get("https://random-word-api.herokuapp.com/word?length=5&?diff=1")
            .then((response) => {
              console.log("OK");
              
                setData(response.data);
                setLoading(false);
            })
            .catch((err) => {
                console.log(err);
                
                setError(err.message);
                setLoading(false);
            });
    }, []);

    // if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

  const handleLoad = () => {
    

    const selectedWord = data;
    
    const letters = selectedWord.split("").map((char) => ({
      answer: char,
      isGuessed: false,
    }));

    setWord(letters)
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

export default Word;
