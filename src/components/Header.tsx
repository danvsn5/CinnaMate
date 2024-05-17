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
        //sets variables for ID elements
        var burgerItems = document.getElementById("burger-list-ID");
        var buttonA = document.getElementById("itm-btn-A");
        var buttonB = document.getElementById("itm-btn-B");
        var buttonC = document.getElementById("itm-btn-C");

        if (isburgerOpen == false) {
            // if the burger bar is currently closed, open the bar by setting the constant height which functions
            // through animation, set the display style to block and then set the opacity to 1 after the 
            // burger bar has been opened with animation
            if (burgerItems) burgerItems.style.height = "240px"
            if (buttonA) buttonA.style.display = "block"
            if (buttonB) buttonB.style.display = "block"
            if (buttonC) buttonC.style.display = "block"

            setTimeout(function () {
                if (buttonA) buttonA.style.opacity = "1"
                if (buttonB) buttonB.style.opacity = "1"
                if (buttonC) buttonC.style.opacity = "1"
            }, 350);

            setBurger(true);
        } else {
            // closes buttons with fade out animation; once animation is complete, closes the rest of the 
            // burger bar
            if (buttonA) buttonA.style.opacity = "0"
            if (buttonB) buttonB.style.opacity = "0"
            if (buttonC) buttonC.style.opacity = "0"

            setTimeout(function () {
                if (burgerItems) burgerItems.style.height = "0px"
                if (buttonA) buttonA.style.display = "none"
                if (buttonB) buttonB.style.display = "none"
                if (buttonC) buttonC.style.display = "none"
            }, 350);

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
                            <button className="burger-item-button" id="itm-btn-A" onClick={displayBurger}>Home</button>
                        </Link>
                    </li>
                    <li>
                        <Link to="/browser">
                            <button className="burger-item-button" id="itm-btn-B" onClick={displayBurger}>Browse Movies</button>
                        </Link>
                    </li>
                    <li>
                        <Link to="/movies">
                            <button className="burger-item-button" id="itm-btn-C" onClick={displayBurger}>My Movies</button>
                        </Link>
                    </li>
                </ul>
            </div>
        </header >
    )
}

export default Header;