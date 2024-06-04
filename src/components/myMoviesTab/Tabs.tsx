const Tabs = () => {
    return (
        <div className="tabs-container">
            <ul className="tabs-list">
                <li className="tab-list-item">
                    <button  className="movie-tab-button">Favourites</button>
                </li>
                <li className="tab-list-item">
                    <button className="movie-tab-button">Seen</button>
                </li>
                <li className="tab-list-item">
                    <button  className="movie-tab-button">Watchlist</button>
                </li>
            </ul>
        </div>
        
    )
}

export default Tabs