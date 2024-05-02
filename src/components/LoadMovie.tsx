import { useState } from 'react';

const LoadMovie = ({movie}:any) => {

  
    // fetches API data for trending movies this week and stores data inside results array
  
  
  // fetches API data for trending movies this week and stores data inside results array

  let [genres, setResults] = useState([]);

  const url = `https://api.themoviedb.org/3/movie/${movie.id}?language=en-US`;
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1YWIxNjYwNWY5MzQ5MzJiYzk4N2NlZTJjYjRiZGMwYyIsInN1YiI6IjY2MmNmMTk1ZTMzZjgzMDEyMjIxMDc3NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Xu5UsO6VS90CsemI07dMUU6xjKcbTxQ1UrfGjC9iFjc'
    }
  };

  // if the call was succcesful then store the data gathered inside the results array

  if(genres.length ==0){
    fetch(url, options)
      .then((res: any) => res.json())
      .then((data: any) => {
        console.log(data);
        setResults(data.genres);
      })
      .catch((err: any) => console.error('error:' + err));
    }


  // movieCards element maps the collected elements from the array collected
  // by the API and is used in return code through <Card> element
  let movieCards = genres.map((movie: any) =>
  (
    <li key={movie.id} className="trending-list">
        <h6>{movie.id}</h6>
        <h6>{movie.name}</h6>
    </li>
  )
  )

  return (
    <div>
        <h6>Trying to load movie tester</h6>
        {movieCards}
    </div>
  )
}

export default LoadMovie