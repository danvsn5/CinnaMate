import Thumbnail from "../cards/Thumbnail"

Thumbnail
const SearchMovieCard = ({ movie }: any) => {
    return (
        <div className="search-card-result">
            <div className="thumbnail-and-title">
                <Thumbnail movie={movie} />
                <h1 className="search-card-title">{movie.title}</h1>
            </div>
            <h1 className="search-card-date">{movie.release_date.substring(0, 4)}</h1>
        </div>
    )
}

export default SearchMovieCard