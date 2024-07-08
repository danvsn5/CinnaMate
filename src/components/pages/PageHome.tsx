import { useState } from "react";
import Subheader from "../margins/Subheader"
import Card from "../cards/Card"
import movieType from "../utils/movieType";

const PageHome = () => {

  // initialise page variable
  PageID.pageIdentifier = "Home"
  PageID.onMovie = false


  // fetches API data for trending movies this week and stores data inside results array

  const [results, setResults] = useState([]);

  /* —————————————————————————————————————————— API Call —————————————————————————————————————————— */

  const url = 'https://api.themoviedb.org/3/trending/movie/week?language=en-US';
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1YWIxNjYwNWY5MzQ5MzJiYzk4N2NlZTJjYjRiZGMwY'
        + 'yIsInN1YiI6IjY2MmNmMTk1ZTMzZjgzMDEyMjIxMDc3NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Xu'
        + '5UsO6VS90CsemI07dMUU6xjKcbTxQ1UrfGjC9iFjc'
    }
  };

  // if the call was succcesful then store the data gathered inside the results array;
  // ensures that call is made only once 
  if (results.length == 0) {
    fetch(url, options)
      .then((res) => res.json())
      .then((data) => {
        setResults(data.results);
      })
      .catch((err) => console.error('error:' + err));

  }
  /* —————————————————————————————————————————————— - ————————————————————————————————————————————— */

  // movieCards element maps the collected elements from the array collected
  // by the API and is used in return code through <Card> element
  const movieCards = results.map((movie: movieType) =>
  (
    <li key={movie.id} className="trending-list">
      <Card movie={movie} category="null"/>
    </li>
  )
  )

  return (
    <div className="main-content">
      <Subheader subheaderTitle="See What's Trending" />
      <div className="trending-main-content">
        {movieCards}
      </div>
    </div>

  )
}

export default PageHome