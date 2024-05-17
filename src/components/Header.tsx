import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const Header = () => {

    const [isDesktop, setDesktop] = useState(window.innerWidth < 956);

    const updateMedia = () => {
        setDesktop(window.innerWidth < 956);
    };

    useEffect(() => {
        window.addEventListener("resize", updateMedia);
        return () => window.removeEventListener("resize", updateMedia);
    });

    const [isburgerOpen, setBurger] = useState(false);

    function displayBurger() {
        var burgerItems = document.getElementById("burger-list-ID");

        if (isburgerOpen == false) {
            if (burgerItems) burgerItems.style.display = "block"
            setBurger(true);
        } else {
            if (burgerItems) burgerItems.style.display = "none"
            setBurger(false)
        }
    }

    return (

        <header>
            <div className="navbar">
                <div className="navbar-contents">
                    <div className="site-title">
                        <h1>CinnaMate</h1>
                    </div>
                    {isDesktop ? (
                        <span></span>
                    ) : (
                        <div className="header-tabs">
                            <ul className="tab-button-links">
                                <li className="tab-button">
                                    <Link to="/">
                                        <button className="navbar-button">Home</button>
                                    </Link>
                                </li>
                                <li className="tab-button">
                                    <Link to="/browser">
                                        <button className="navbar-button">Browse Movies</button>
                                    </Link>
                                </li>
                                <li className="tab-button">
                                    <Link to="/movies">
                                        <button className="navbar-button">My Movies</button>
                                    </Link>
                                </li>
                            </ul>
                        </div>)}
                </div>

                {isDesktop ? (
                    <div className="burger-bar">
                        <div className="hamburger-icon-A">
                            <button className="burger-button-A" onClick={displayBurger}>
                                <span className="top-burger left" />
                                <span className="mid-burger left" />
                                <span className="bot-burger left" />
                            </button>
                        </div>
                        <div className="hamburger-icon-B">
                            <button className="burger-button-B" onClick={displayBurger}>
                                <span className="top-burger right" />
                                <span className="mid-burger right" />
                                <span className="bot-burger right" />
                            </button>
                        </div>
                    </div>
                ) : (
                    <span />
                )}
                <ul className="list-items" id="burger-list-ID">

                    <li>
                        <Link to="/">
                            <button className="burger-item-button" onClick={displayBurger}>Home</button>
                        </Link>
                    </li>
                    <li>
                        <Link to="/browser">
                            <button className="burger-item-button" onClick={displayBurger}>Browse Movies</button>
                        </Link>
                    </li>
                    <li>
                        <Link to="/movies">
                            <button className="burger-item-button" onClick={displayBurger}>My Movies</button>
                        </Link>
                    </li>

                </ul>
            </div>
        </header >
    )
}

export default Header;