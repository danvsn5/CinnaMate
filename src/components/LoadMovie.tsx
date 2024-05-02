import { useState } from 'react';

const LoadMovie = ({movie}:any) => {

  // fetches API data for trending movies this week and stores data inside results array

  let [results, setResults] = useState([]);

  const url = `https://api.themoviedb.org/3/movie/693134?language=en-US`;
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1YWIxNjYwNWY5MzQ5MzJiYzk4N2NlZTJjYjRiZGMwYyIsInN1YiI6IjY2MmNmMTk1ZTMzZjgzMDEyMjIxMDc3NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Xu5UsO6VS90CsemI07dMUU6xjKcbTxQ1UrfGjC9iFjc'
    }
  };

  // if the call was succcesful then store the data gathered inside the results array

    fetch(url, options)
      .then((res: any) => res.json())
      .then((data: any) => {
        console.log(data);
        setResults(data.results);
      })
      .catch((err: any) => console.error('error:' + err));

      let movieitems = results?.map((mov: any) =>
        (
          <li key={mov.id} className="trending-list">
            <h6>{mov.budget}</h6>
            <h6>{mov.original_title}</h6>
            <h6>{mov.popularity}</h6>
            <h6>{mov.budget}</h6>
          </li>
        )
        )


  return (
    <div>
        <h6>Trying to load movie tester</h6>
        {movieitems}
    </div>
  )
}

export default LoadMovie