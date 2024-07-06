import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

function ExpandedSubheader(props: any) {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <div className="subheader-container">
            <div className="subheader">
                <div id="exp-subheader" className="exp-subheader-title">
                    <h1>
                        <span>&#x200B;</span> {props.subheaderTitle}
                    </h1>
                    {windowWidth > 1000 && (
                        <>
                            {PageID.pageIdentifier === "Home" && PageID.onMovie && (
                                <Link to="/">
                                    <button className="exp-return-button">Return</button>
                                </Link>
                            )}
                            {PageID.pageIdentifier === "Browse" && PageID.onMovie && (
                                <Link to="/browser">
                                    <button className="exp-return-button">Return</button>
                                </Link>
                            )}
                            {PageID.pageIdentifier === "MyMovies" && PageID.onMovie && (
                                <Link to="/movies">
                                    <button className="exp-return-button">Return</button>
                                </Link>
                            )}
                        </>
                    )}
                </div>
            </div>
            <hr className="break" />
        </div>
    );
}

export default ExpandedSubheader;