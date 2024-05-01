import { useState } from "react";
import Subheader from "./Subheader"

const PageHome = () => {

  let [results, setResults] = useState([]);

  const url = 'https://api.themoviedb.org/3/trending/movie/week?language=en-US';
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1YWIxNjYwNWY5MzQ5MzJiYzk4N2NlZTJjYjRiZGMwYyIsInN1YiI6IjY2MmNmMTk1ZTMzZjgzMDEyMjIxMDc3NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Xu5UsO6VS90CsemI07dMUU6xjKcbTxQ1UrfGjC9iFjc'
    }
  };

  fetch(url, options)
    .then((res: any) => res.json())
    .then((data: any) => {
      console.log(data);
      setResults(data.results);
    })
    .catch((err: any) => console.error('error:' + err));

    const movieTitles = results.map((movie:any) =>
      (
        <li>{movie.title}</li>
      )
      )

  return (
    <div>
      <Subheader subheaderTitle="See What's Trending" />
      
      <h2>{movieTitles}</h2>

    </div>

  )
}

export default PageHome