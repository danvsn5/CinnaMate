import { useState } from "react"
import MovieList from "../utils/collectMovies"

const Tabs = () => {

    const [currentTabContent, setTabContent] = useState("favourites")

    const favButton = document.getElementById("fav-tab");
    const seenButton = document.getElementById("seen-tab");
    const watchlistButton = document.getElementById("watchlist-tab");

    function setFavourites() {
        setTabContent("favourites")
        if (favButton) favButton.classList.add("active-tab")
        if (seenButton) seenButton.classList.remove("active-tab");
        if (watchlistButton) watchlistButton.classList.remove("active-tab")
    }

    function setSeen() {
        setTabContent("seen")
        if (seenButton) seenButton.classList.add("active-tab");
        if (favButton) favButton.classList.remove("active-tab")
        if (watchlistButton) watchlistButton.classList.remove("active-tab")
    }

    function setWatchlist() {
        setTabContent("watchlist")
        if (watchlistButton) watchlistButton.classList.add("active-tab")
        if (favButton) favButton.classList.remove("active-tab")
        if (seenButton) seenButton.classList.remove("active-tab");
    }

    return (
        <div>
            <div className="tabs-container">
                <ul className="tabs-list">
                    <li className="tab-list-item">
                        <button id="fav-tab" className="movie-tab-button active-tab" onClick={setFavourites}>Favourites</button>
                    </li>
                    <li className="tab-list-item">
                        <button id="seen-tab" className="movie-tab-button" onClick={setSeen}>Seen</button>
                    </li>
                    <li className="tab-list-item">
                        <button id="watchlist-tab" className="movie-tab-button" onClick={setWatchlist}>Watchlist</button>
                    </li>
                </ul>
            </div>
            <hr className="browsing-break" />
            <MovieList dbCategory={currentTabContent} />
        </div>


    )
}

export default Tabs