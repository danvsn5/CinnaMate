import { useState } from 'react';

const LoadMovie = ({ movie }: any) => {

    // fetches API data for current selected movie and stores important values: title, release date, overview
    // tagline and poster path
    let [title, setTitle] = useState();
    let [overview, setOverview] = useState();
    let [release, setRelease] = useState();
    let [tagline, setTagline] = useState();
    let [posterPath, setPosterPath] = useState();


    const url = `https://api.themoviedb.org/3/movie/${movie.id}?language=en-US`;
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1YWIxNjYwNWY5MzQ5MzJiYzk4N2NlZTJjYjRiZGMwYyIsInN1YiI6IjY2MmNmMTk1ZTMzZjgzMDEyMjIxMDc3NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Xu5UsO6VS90CsemI07dMUU6xjKcbTxQ1UrfGjC9iFjc'
        }
    };

    // if the call was succcesful then store the data gathered inside each individual component

    fetch(url, options)
        .then((res: any) => res.json())
        .then((data: any) => {
            setTitle(data.title)
            setOverview(data.overview)
            setRelease(data.release_date)
            setTagline(data.tagline)
            setPosterPath(data.poster_path)
        })
        .catch((err: any) => console.error('error:' + err));

        // returns as a list of items insid ethe page for dev viewing 
    return (
        <div>
            <h1>{title}</h1>
            <h2>{tagline}</h2>
            <h2>{overview}</h2>
            <h2>{release}</h2>
            <h2>{posterPath}</h2>
        </div>
    )
}

export default LoadMovie