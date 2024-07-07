import db from "../../../firebase.config";
import { doc, getDoc } from "firebase/firestore";
import Card from "../cards/Card";
import { useState, useEffect } from "react";
import movieTypeTab from "../utils/movieTypeTab";

// based on the input array of movieIDs, creates a query to the database and collects the required data
// for a movie card
async function fetchMovieDetails(movieIds: number[]): Promise<movieTypeTab[]> {
    const movies: movieTypeTab[] = [];

    for (let i = 0; i < movieIds.length; i++) {
        const element = movieIds[i];
        const url = `https://api.themoviedb.org/3/movie/${element}?language=en-US`;
        const options = {
            method: 'GET',
            headers: {
                accept: 'application/json',
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1YWIxNjYwNWY5MzQ5MzJiYzk4N2NlZTJjYjRiZGMwYyIsInN1YiI6IjY2MmNmMTk1ZTMzZjgzMDEyMjIxMDc3NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Xu5UsO6VS90CsemI07dMUU6xjKcbTxQ1UrfGjC9iFjc'
            }
        };

        // pushes data to the movie type in movies[]
        try {
            const response = await fetch(url, options);
            const data = await response.json();
            movies.push({
                id: data.id,
                title: data.title,
                poster_path: data.poster_path,
                release_date: data.release_date,
            });
        } catch (err) {
            console.error('error:', err);
        }
    }

    return movies;
}


async function getMovieIds(dbCategory: string, username: string): Promise<number[]> {
    const docRef = doc(db, "users", username);
    const docSnap = await getDoc(docRef);

    if (!docSnap.exists()) {
        return [];
    }

    const movies = docSnap.data().movies;
    let trueIds: number[] = [];

    // if the user is logged in, this logic will proceed; gets a snapshot of the user database. If there are elements inside the
    // database, and their key is set to true, they will be added to the trueIds array, which is returned 
    switch (dbCategory) {
        case "favourites":
            trueIds = Object.keys(movies.favourites)
                .filter(id => movies.favourites[id])
                .map(id => parseInt(id));
            break;
        case "seen":
            trueIds = Object.keys(movies.seen)
                .filter(id => movies.seen[id])
                .map(id => parseInt(id));
            break;
        case "watchlist":
            trueIds = Object.keys(movies.watchlist)
                .filter(id => movies.watchlist[id])
                .map(id => parseInt(id));
            break;
        default:
            break;
    }
    return trueIds;
}

const MovieList: React.FC<{ dbCategory: string }> = ({ dbCategory }) => {
    const [movies, setMovies] = useState<movieTypeTab[]>([]);
    const [isLoading, setLoading] = useState(true)

    useEffect(() => {
        async function fetchAndSetMovies() {
            if (loggedInState.isLoggedIn) {
                const movieIds = await getMovieIds(dbCategory, loggedInState.username);
                const fetchedMovies = await fetchMovieDetails(movieIds);
                setTimeout(() => {
                    setMovies(fetchedMovies);
                }, 250);
                setLoading(false)
            }
        }
        fetchAndSetMovies();
    }, [dbCategory]);

    // maps the movie cards as a list of items

    const movieCards = movies.map((movie) => (
        <li key={movie.id} className="trending-list">
            <Card movie={movie} category={dbCategory} />
        </li>
    ));

    if (!loggedInState.isLoggedIn) {
        return (
            <div className="tab-main-content">
                <h1 className="my-movie-error">You are not currently logged in. Log in to add movies to your lists</h1>
            </div>
        )
    } else {

        if (isLoading) {
            return (
                <div className="tab-main-content">
                    <div className="spinner" />
                </div>
            )
        }

        return (
            <div id="content-display" className="tab-main-content">
                {movieCards}
            </div>

        );
    }

};

export default MovieList;
