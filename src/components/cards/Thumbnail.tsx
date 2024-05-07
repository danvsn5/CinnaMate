import { Link } from "react-router-dom";


// thumbnail element used within cards to be displayed to user
const Thumbnail = ({ movie }: any) => {

  const id1: any = movie.id -1000000;

  const setHoverChangeThumb = () => {
    let id: any = movie.id;
    const thumb = document.getElementById(id)
    if (thumb) thumb.style.boxShadow = "0px 0px 16px 8px var(--light-purple)";
    const title = document.getElementById(id1)
    if (title) title.style.color = "var(--light-purple)";
    if (title) title.style.textDecoration = "underline";
}

const setHoverChangeOffThumb = () => {
  let id: any = movie.id;
  const thumb = document.getElementById(id)
  if (thumb) thumb.style.boxShadow = "0px 0px 0px 3px var(--dark-purple)";
  const title = document.getElementById(id1)
    if (title) title.style.color = "#ffffff";
    if (title) title.style.textDecoration = "none";

}

  return (
    <div className="card-thumbnail">
      {movie.poster_path ? (

        <Link to='/yourmovie' state={{ movie }}>
          <img decoding="sync" id={movie.id} className="actual-thumb" onMouseOver={setHoverChangeThumb} onMouseLeave={setHoverChangeOffThumb} src={`https://image.tmdb.org/t/p/w780${movie.poster_path}`} alt={`${movie.title}`} />
        </Link>
      ) : (
        <div className="poster-not-found"></div>
      )}
    </div>
  )
}

export default Thumbnail