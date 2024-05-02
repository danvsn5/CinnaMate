import { useLocation } from "react-router-dom"
import LoadMovie from "./LoadMovie"

const PageMovie = () => {

const location = useLocation()

const movie = location.state.movie;
    return (



        <div>
            <h6>Preposition to loading movie</h6>
            <LoadMovie movie={movie}/>
        </div>




    )
}

export default PageMovie