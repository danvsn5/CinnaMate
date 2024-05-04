import Thumbnail from "./Thumbnail"
import AddButtons from "./AddButtons"
import { Link } from "react-router-dom"

// card wrapper that will contain the wrapped elements for each movie
// including title, thumbnail, date released (smaller font) and buttons for adding to MyMovies
const Card = ({ movie }: any) => {
  return (

    <div className="page-card">
      <Thumbnail movie={movie} />
      <AddButtons />
      <Link to='/yourmovie' state={{movie}}>
      <h2 className="thumbnail-title">{movie.title}</h2>
      </Link>
      <h2 className="thumbnail-date">{movie.release_date.substring(0, 4)}</h2>
    </div>


  )
}

export default Card