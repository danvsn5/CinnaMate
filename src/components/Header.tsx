import { Link } from "react-router-dom";

const Header = () => {

    return (

        <header>
            <div className="container">
                <div className="inner-content">
                    <div className="title">
                        <h1>CinnaMate</h1>
                    </div>
                    <div className="header-tabs">
                        <ul className="tab-button-links">
                            <li>
                                <button className="navbar-button">
                                    <Link to="/home">Home</Link>
                                </button>
                            </li>

                            <li>
                                <button className="navbar-button">
                                    <Link to="/browser">Browse Movies</Link>
                                </button>
                            </li>

                            <li>
                                <button className="navbar-button">
                                    <Link to="/movies">My Movies</Link>
                                </button>
                            </li>


                        </ul>
                    </div>


                </div>
            </div>
        </header>

    )


}

export default Header;