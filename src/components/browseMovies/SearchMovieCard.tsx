import Thumbnail from "../cards/Thumbnail"
import { Link } from "react-router-dom"

Thumbnail
const SearchMovieCard = ({ movie }: any) => {
    return (
        <div className="search-card-result">
            <div className="thumbnail-and-title">
                <Thumbnail movie={movie} />
                <h1 className="search-card-title">
                    <Link to='/yourmovie' state={{ movie }}>
                        {movie.title}
                    </Link>
                </h1>
            </div>
            <Link to='/yourmovie' state={{ movie }}>
                <h1 className="search-card-date">{movie.release_date.substring(0, 4)}</h1>
            </Link>
        </div>
    )
}

export default SearchMovieCard