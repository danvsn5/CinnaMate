import { Link } from "react-router-dom";


// thumbnail element used within cards to be displayed to user
const Thumbnail = ({ movie }: any) => {

  return (
    <div className="card-thumbnail">
      {movie.poster_path ? (

        <Link to='/yourmovie' state={{movie}}>
        <img className="actual-thumb" src={`https://image.tmdb.org/t/p/w780${movie.poster_path}`} alt={`${movie.title}`} />
        </Link>
      ) : (
        <div className="poster-not-found"></div>
      )}
    </div>
  )
}

export default Thumbnail