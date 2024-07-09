import movieType from "../utils/movieType"
import ThumbnailBrowser from "./ThumbnailBrowser"

const SearchMovieCard = ({ movie }: { movie: movieType }) => {


    return (
        <div className="search-card-result">

            {window.innerWidth < 700 &&
                <h1 className="search-card-title">{movie.title}</h1>
            }
            {window.innerWidth < 700 &&
                <h1 className="search-card-date">{movie.release_date.substring(0, 4)}</h1>
            }

            {window.innerWidth >= 700 &&
                <div className="thumbnail-and-title">
                    <ThumbnailBrowser movie={movie} />
                </div>
            }
            {window.innerWidth >= 700 &&
                <h1 className="search-card-title">{movie.title}</h1>

            }
            {window.innerWidth >= 700 &&
                <h1 className="search-card-date">{movie.release_date.substring(0, 4)}</h1>
            }
        </div>
    )
}

export default SearchMovieCard