import { useState } from "react";
import Subheader from "./Subheader"
import Card from "./cards/Card"

const PageHome = () => {

  // fetches API data for trending movies this week and stores data inside results array

  let [results, setResults] = useState([]);

  const url = 'https://api.themoviedb.org/3/trending/movie/week?language=en-US';
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1YWIxNjYwNWY5MzQ5MzJiYzk4N2NlZTJjYjRiZGMwYyIsInN1YiI6IjY2MmNmMTk1ZTMzZjgzMDEyMjIxMDc3NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Xu5UsO6VS90CsemI07dMUU6xjKcbTxQ1UrfGjC9iFjc'
    }
  };

  // if the call was succcesful then store the data gathered inside the results array
  if (results.length == 0) {
    fetch(url, options)
      .then((res: any) => res.json())
      .then((data: any) => {
        console.log(data);
        setResults(data.results);
      })
      .catch((err: any) => console.error('error:' + err));

  }

  // movieCards element maps the collected elements from the array collected
  // by the API and is used in return code through <Card> element
  let movieCards = results.map((movie: any) =>
  (
    <li key={movie.id} className="trending-list">
      <Card movie={movie} />
    </li>
  )
  )

  return (
    <div>
      <Subheader subheaderTitle="See What's Trending" />
      <div className="trending-main-content">
      {movieCards}
      </div>
    </div>

  )
}

export default PageHome