import { useLocation } from "react-router-dom"
import LoadMovie from "./LoadMovie"

const PageMovie = () => {

    const location = useLocation()

    const movie = location.state.movie;

    PageID.onMovie = true


    return (
            <LoadMovie movie={movie} />
    )
}

export default PageMovie