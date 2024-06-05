import { useState } from "react"
import MovieList from "../utils/collectMovies"

const Tabs = () => {

    const [currentTabContent, setTabContent] = useState("favourites")

    function setFavourites() {
        setTabContent("favourites")
    }

    function setSeen() {
        setTabContent("seen")
    }

    function setWatchlist() {
        setTabContent("watchlist")
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