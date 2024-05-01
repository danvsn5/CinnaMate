import Thumbnail from "./Thumbnail"

// card wrapper that will contain the wrapped elements for each movie
// including title, thumbnail, date released (smaller font) and buttons for adding to MyMovies
const Card = ({movie}:any) => {
  return (
    
    <div className="page-card">
      <Thumbnail movie={movie}/>
      <h2 className="thumbnail-title">{movie.title}</h2>
      <h2 className="thumbnail-date">{movie.release_date.substring(0,4)}</h2>

    </div>


  )
}

export default Card