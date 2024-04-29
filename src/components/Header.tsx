import { Link } from "react-router-dom";

const Header = () => {

    return (

        <header>
            <div className="container">
                <div className="inner-content">
                    <div className="site-title">
                        <h1>CinnaMate</h1>
                    </div>
                    <div className="header-tabs">
                        <ul className="tab-button-links">
                            <li>
                                <Link to="/">
                                    <button className="navbar-button">Home</button>
                                </Link>
                            </li>

                            <li>
                            <Link to="/browser">
                                    <button className="navbar-button">Browse Movies</button>
                                </Link>
                            </li>

                            <li>
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