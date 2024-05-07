import { useLocation } from "react-router-dom"
import LoadMovie from "./LoadMovie"
import { Link } from "react-router-dom"

//TODO - create return button that returns users to the page they were on previously
// based on a globally accessible variable; users should be able to transition between
// the home page, browsing page, and then each individual sub page of the MyMovies page

const PageMovie = () => {

    const location = useLocation()

    const movie = location.state.movie;

    PageID.onMovie = true


    return (
            <LoadMovie movie={movie} />
    )
}

export default PageMovie