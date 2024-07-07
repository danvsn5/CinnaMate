import { useState } from 'react';
import ExpandedThumbnail from './ExpandedThumbnail';
import ExpandedAddButtons from './ExpandedAddButtons';
import ExpandedSubheader from './ExpandedSubheader';
import MovieTag from './MovieTag';
import CurrentTags from './CurrentTags';
import movieType from '../utils/movieType';

const LoadMovie = ({ movie }: { movie: movieType }) => {

    // fetches API data for current selected movie and stores important values: title, release date, overview
    // tagline and poster path
    let [title, setTitle] = useState<string>("");
    let [overview, setOverview] = useState<string>("");
    //let [release, setRelease] = useState();
    let [tagline, setTagline] = useState<string>("");
    let [posterPath, setPosterPath] = useState<string>("");

    /* —————————————————————————————————————————— API Call —————————————————————————————————————————— */

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
            //setRelease(data.release_date)
            setTagline(data.tagline)
            setPosterPath(data.poster_path)
        })
        .catch((err: any) => console.error('error:' + err));

    /* —————————————————————————————————————————————— - ————————————————————————————————————————————— */

    // result from API call is used either:
    // individually through HTML elements
    // conditional rendering
    // props to other subfile components 
    return (
        <div className="main-content">

            <ExpandedSubheader subheaderTitle={title} />
            <div className='expanded-main-content'>
                <ExpandedThumbnail path={posterPath} />
                <div className='right-thumbnail-content'>
                    {tagline ? (
                        <h1 className='main-tagline'>{tagline}</h1>
                    ) : (
                        <h2 className='overview-text'>{overview}</h2>
                    )}
                    {tagline ? (
                        <h2 className='overview-text'>{overview}</h2>
                    ) : (
                        <span></span>
                    )}
                    <ExpandedAddButtons movie={movie} />
                </div>
                <CurrentTags movieID={movie.id} />
                <MovieTag movieID={movie.id} />
            </div>
        </div>
    )
}

export default LoadMovie