import { useState } from "react";
import MovieList from "./collectMovies";

const Tabs = () => {
    const [currentTabContent, setTabContent] = useState("favourites");
    const [isLoading, setLoadingStatus] = useState(false);

    const handleTabClick = (tab: string) => {
        setLoadingStatus(true);
        setTabContent(tab);

        setTimeout(() => {
            setLoadingStatus(false);
        }, 2000);
    };

    return (
        <div>
            <div className="tabs-container">
                <ul className="tabs-list">
                    <li className="tab-list-item">
                        <button
                            className={`movie-tab-button ${currentTabContent === "favourites" ? "active-tab" : ""}`}
                            onClick={() => handleTabClick("favourites")}>
                            Favourites
                        </button>
                    </li>
                    <li className="tab-list-item">
                        <button
                            className={`movie-tab-button ${currentTabContent === "seen" ? "active-tab" : ""}`}
                            onClick={() => handleTabClick("seen")}>
                            Seen
                        </button>
                    </li>
                    <li className="tab-list-item">
                        <button
                            className={`movie-tab-button ${currentTabContent === "watchlist" ? "active-tab" : ""}`}
                            onClick={() => handleTabClick("watchlist")}>
                            Watchlist
                        </button>
                    </li>
                </ul>
            </div>
            <hr className="browsing-break" />

            {isLoading ? (
                <div className="tab-main-content">
                    <div className="spinner" />
                </div>
            ) : (
                <MovieList dbCategory={currentTabContent} />
            )}
        </div>
    );
};

export default Tabs;
