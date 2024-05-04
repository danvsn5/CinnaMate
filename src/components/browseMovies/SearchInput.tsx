const SearchInput = () => {
    return (
        <div className="search-input-wrapper">
            <input className="search-input-editor" type="text" placeholder="Browse for Movies..."/>
            <button className="search-input-button">
                <i className="icon fa-solid fa-magnifying-glass"></i>
            </button>
        </div>
    )
}

export default SearchInput