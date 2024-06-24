import Thumbnail from "./Thumbnail"
import AddButtons from "./AddButtons"
import { Link } from "react-router-dom"

// card wrapper that will contain the wrapped elements for each movie
// including title, thumbnail, date released (smaller font) and buttons for adding to MyMovies

interface CardProps {
  movie: any;
  category: string;
}

const Card: React.FC<CardProps> = ({ movie, category }) => {

  const id1: any = movie.id - 1000000;

  /* ————————————————————————————————————————— Hover Logic ———————————————————————————————————————— */

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
    if (thumb) thumb.style.boxShadow = "0px 0px 0px 0px var(--dark-purple)";
    const title = document.getElementById(id1)
    if (title) title.style.color = "#ffffff";
    if (title) title.style.textDecoration = "none";

  }

  return (

    <div className="page-card">
      <Thumbnail movie={movie} />
      <AddButtons movie={movie} category={category} />
      <Link to='/yourmovie' state={{ movie }}>
        <h2 id={id1} onMouseOver={setHoverChangeThumb} onMouseLeave={setHoverChangeOffThumb} className="thumbnail-title">{movie.title}</h2>
      </Link>
      <h2 className="thumbnail-date">{movie.release_date.substring(0, 4)}</h2>
    </div>


  )
}

export default Card