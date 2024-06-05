import MovieList from "../utils/collectMovies"

const Tabs = () => {
    return (
        <div>
            <div className="tabs-container">
                <ul className="tabs-list">
                    <li className="tab-list-item">
                        <button className="movie-tab-button active-tab">Favourites</button>
                    </li>
                    <li className="tab-list-item">
                        <button className="movie-tab-button">Seen</button>
                    </li>
                    <li className="tab-list-item">
                        <button className="movie-tab-button">Watchlist</button>
                    </li>
                </ul>
            </div>
            <hr className="browsing-break" />
            <MovieList dbCategory="favourites"/>
        </div>


    )
}

export default Tabs