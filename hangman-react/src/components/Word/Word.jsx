
function Word({ loading, word, handleLoad}) {

  function display() {
    return (
      <div className="word">
          <p>
            word: {word[0].isGuessed?word[0].answer:"_"} {word[1].isGuessed?word[1].answer:"_"} {word[2].isGuessed?word[2].answer:"_"} {word[3].isGuessed?word[3].answer:"_"} {word[4].isGuessed?word[4].answer:"_"}  
          </p>
        </div>
    );
  }

  return (
    <>
      <div className="word-box">
        <button type="button" className="btn btn-primary" onClick={handleLoad}>
          Load the word
        </button>
        
        {loading ? "press button": display()}
      </div>
    </>
  );
}

export { Word };
