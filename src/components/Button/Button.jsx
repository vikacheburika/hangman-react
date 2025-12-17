import "./Button.css";
import 'bootstrap/dist/css/bootstrap.min.css';

const Button = ({onClick}) => {

    return(
        <>
        <button className="button-wrong" onClick={onClick} type="button" type="button" className="btn btn-primary btn-lg">
            GUESS WRONG
        </button>
        </>
    )
}

export default Button;