import "./Header.css";

const Header = (meow) => {

    return(
        <>
            <div className="header-container">
                <h1>Hangman The Game</h1>
                <h2>Welcome, {meow.name}! We are here for {meow.content}.</h2>
            </div>
        </>
    )
}

export default Header;