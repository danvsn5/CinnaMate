import { Link } from "react-router-dom";

const Header = () => {

    return (

        <header>
            <div className="navbar">
                <div className="navbar-contents">
                    <div className="site-title">
                        <h1>CinnaMate</h1>
                    </div>
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
                    </div>
                </div>
            </div>
        </header>

    )


}

export default Header;