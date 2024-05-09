import { useLocation } from "react-router-dom"
import LoadMovie from "./LoadMovie"

const PageMovie = () => {
    // initialise movie prop based on input movie through React State
    const location = useLocation()
    const movie = location.state.movie;

    // initialise page variable
    PageID.onMovie = true

    return (
        <LoadMovie movie={movie} />
    )
}

export default PageMovie