import "./Picture.css";

import kartuves0 from "../../assets/images/kartuves_0.png";
import kartuves1 from "../../assets/images/kartuves_1.png";
import kartuves2 from "../../assets/images/kartuves_2.png";
import kartuves3 from "../../assets/images/kartuves_3.png";
import kartuves4 from "../../assets/images/kartuves_4.png";
import kartuves5 from "../../assets/images/kartuves_5.png";
import kartuves6 from "../../assets/images/kartuves_6.png";
import kartuves7 from "../../assets/images/kartuves_7.png";
import kartuves8 from "../../assets/images/kartuves_8.png";
import kartuves9 from "../../assets/images/kartuves_9.png";
import kartuves10 from "../../assets/images/kartuves_10.png";


const images = [kartuves0, kartuves1, kartuves2, kartuves3, kartuves4, kartuves5, kartuves6, kartuves7, kartuves8, kartuves9, kartuves10]


const Picture = ({step}) => {

    
    return (
        <>
            <div className="picture-main">
                <img src={images[step]} alt="kartuves" />
            </div>
        </>
    )
} 

export default Picture;

