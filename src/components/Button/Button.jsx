import "./Button.css";

const Button = ({onClick}) => {

    return(
        <>
        <button className="button-wrong" onClick={onClick}>
            GUESS WRONG
        </button>
        </>
    )
}

export default Button;