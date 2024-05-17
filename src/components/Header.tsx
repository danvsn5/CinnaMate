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
                            <button className="burger-button-A">
                                <span className="top-burger left" />
                                <span className="mid-burger left" />
                                <span className="bot-burger left" />
                            </button>
                        </div>
                        <div className="hamburger-icon-B">
                            <button className="burger-button-B">
                                <span className="top-burger right" />
                                <span className="mid-burger right" />
                                <span className="bot-burger right" />
                            </button>
                        </div>
                    </div>
                ) : (
                    <span/>
                )}
            </div>
        </header >
    )
}

export default Header;