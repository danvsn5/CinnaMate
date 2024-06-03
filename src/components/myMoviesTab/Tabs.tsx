const Tabs = () => {
    return (
        <div>
            <ul className="tabs-list">
                <li className="movie-tab-button">
                    <button>Favourites</button>
                </li>
                <li className="movie-tab-button">
                    <button>Seen</button>
                </li>
                <li className="movie-tab-button">
                    <button>Watchlist</button>
                </li>
            </ul>
        </div>
    )
}

export default Tabs