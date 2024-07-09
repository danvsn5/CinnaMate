import { useLocation } from "react-router-dom"
import LoadMovie from "../Expanded-Movie/LoadMovie";
import movieType from "../utils/movieType";

const PageMovie = () => {
    // initialise movie prop based on input movie through React State
    const location = useLocation()
    const movie: movieType = location.state.movie;
    // initialise page variable
    PageID.onMovie = true

    return (
        <LoadMovie movie={movie} />
    )
}

export default PageMovie