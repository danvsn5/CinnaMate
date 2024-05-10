// thumbnail element used within cards to be displayed to user
const ThumbnailBrowser = ({ movie }: any) => {
  return (
    <div className="card-thumbnail">
      {movie.poster_path ? (

        <img decoding="sync" id={movie.id} className="actual-thumb" src={`https://image.tmdb.org/t/p/w780${movie.poster_path}`} alt={`${movie.title}`} />
      ) : (
        <div className="poster-not-found"></div>
      )}
    </div>
  )
}

export default ThumbnailBrowser