import Thumbnail from "./Thumbnail"

// card wrapper that will contain the wrapped elements for each movie
// including title, thumbnail, date released (smaller font) and buttons for adding to MyMovies
const Card = ({movie}:any) => {
  return (
    
    <div className="page-card">
      <h1>{movie.title}</h1>
      <Thumbnail movie={movie}/>
    </div>


  )
}

export default Card