function usedKeys({ meow }) {
  console.log(meow);
  return (
    <>
      <div className="keyboard">
        {meow.map((letter, inx) => (
          <button key={inx} type="button" className="btn btn-danger" disabled>
            {letter}
          </button>
        ))}
      </div>
    </>
  );
}

export default usedKeys;
