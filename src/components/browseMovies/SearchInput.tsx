import { KeyboardEvent, useState } from "react"
import Card from "../cards/Card"
import BrowsingSubheader from "./BrowsingSubheader";
import movieType from "../utils/movieType";
import SearchMovieCard from "./SearchMovieCard";
import { Link } from "react-router-dom";

const SearchInput = () => {

    // MAIN FUNCTIONALITY
    // ---
    // upon loading the page, browsing-sub-sub title will display trending movies at that time 
    // upon inputting a string inside the text editor (maybe) a short list of 2-3 movies will show
    // underneath the search bar; to view full list of movies, the user clicks the search button,
    // causing the browsing-sub-sub title to change to whatever the input string was (reformatted)
    // and the cards to display like how they are displayed in the home trending page.  


    /* —————————————————————————————————————————————————————————————————————————————————————————————— */
    /*                                       Filter and Mapping                                       */
    /* —————————————————————————————————————————————————————————————————————————————————————————————— */

    const [results, setResults] = useState([]);
    const [searchCardResults, setSearchCardResults] = useState([]);

    // filters movies so that if they either do not have a poster, backdrop or overview, they will not be
    // displayed after the search
    function movieFilter(movie: movieType) {
        if ((movie.backdrop_path == null) || (movie.poster_path == null) || (movie.overview == null)) {
            return;
        } else {
            return movie;
        }
    }
    // movieCards element maps the collected elements from the array collected
    // by the API and is used in return code through <Card> element
    const movieCards = results.filter(movieFilter).slice(0, 8).map((movie: movieType) =>
    (
        <li key={movie.id} className="trending-list">
            <Card movie={movie} category="null" />
        </li>

    ))

    const searchMovieCards = searchCardResults.filter(movieFilter).slice(0, 3).map((movie: movieType) =>
    (
        <li key={movie.id} className="search-card-list">
            <Link to='/yourmovie' state={{ movie }}>
                <SearchMovieCard movie={movie} />
            </Link>
        </li>
    ))

    /* —————————————————————————————————————————————— - ————————————————————————————————————————————— */


    const [inputValue, setInputValue] = useState("")

    // as input changes, a query is sent out and maps to the three cards that are displayed as a result from the input query
    const inputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.currentTarget.value)
        getSpecificSmallQuery()
    }

    const Search = () => {
        // changes text based on user input
        setTextChange();
        // generate query based on input value

        //TODO
        getSpecificQuery();

        // changes input box back to empty string

        setInputValue("")
    }


    const searchClick = () => {
        if (inputValue != "") {
            Search();
        }
    }
    const searchEnter = (e?: KeyboardEvent) => {
        if (inputValue != "" && e?.key == "Enter") {
            Search();
        }
    }


    // create new function that takes runs the query to the db and is run inside the searchClick function
    // figure out way to change the movie cards displayed in the main page: main option: rename this class to
    // 'main content'ish and then port the logic for initial trendiing query here; once the user inputs
    // a new query, the cards update based on the user's input query

    const setTextChange = () => {

        const text = document.getElementById("subheader-title-inner-content")
        const initStr = "Searching for: "
        if (text) text.innerHTML = initStr.concat({ inputValue }.inputValue);

    }

    /* —————————————————————————————————————————————————————————————————————————————————————————————— */
    /*                                           Query Calls                                          */
    /* —————————————————————————————————————————————————————————————————————————————————————————————— */

    const urlTrending = 'https://api.themoviedb.org/3/trending/movie/week?language=en-US';
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1YWIxNjYwNWY5MzQ5MzJiYzk4N2NlZTJjYjRiZGMwY'
                + 'yIsInN1YiI6IjY2MmNmMTk1ZTMzZjgzMDEyMjIxMDc3NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Xu'
                + '5UsO6VS90CsemI07dMUU6xjKcbTxQ1UrfGjC9iFjc'
        }
    };

    // if the call was succcesful then store the data gathered inside the results array
    if (results.length === 0) {
        fetch(urlTrending, options)
            .then((res) => res.json())
            .then((data) => {
                setResults(data.results);
            })
            .catch((err) => console.error('error:', err));

    }

    /* —————————————————————————————————————————————— - ————————————————————————————————————————————— */

    const getSpecificQuery = () => {

        const urlSpecific = `https://api.themoviedb.org/3/search/movie?query=${inputValue}&include_adult=false&language=en&page=1`;
        const options = {
            method: 'GET',
            headers: {
                accept: 'application/json',
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1YWIxNjYwNWY5MzQ5MzJiYzk4N2NlZTJjYjRiZGMwY'
                    + 'yIsInN1YiI6IjY2MmNmMTk1ZTMzZjgzMDEyMjIxMDc3NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Xu'
                    + '5UsO6VS90CsemI07dMUU6xjKcbTxQ1UrfGjC9iFjc'
            }
        };

        // if the call was succcesful then store the data gathered inside the results array
        fetch(urlSpecific, options)
            .then((res) => res.json())
            .then((data) => {
                if (data.total_results != 0) {
                    setResults([])
                    setResults(data.results);
                } else {
                    // if no results are returned, display a new subheader and have the trending movies reuploaded
                    const text = document.getElementById("subheader-title-inner-content")
                    if (text) text.innerHTML = "No Movies Found. Instead Displaying Previous Search:"
                }
            })
            .catch((err) => console.error('error:' + err));

    }

    const getSpecificSmallQuery = () => {

        const urlSpecific = `https://api.themoviedb.org/3/search/movie?query=${inputValue}&include_adult=false&language=en&page=1`;
        const options = {
            method: 'GET',
            headers: {
                accept: 'application/json',
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1YWIxNjYwNWY5MzQ5MzJiYzk4N2NlZTJjYjRiZGMwY'
                    + 'yIsInN1YiI6IjY2MmNmMTk1ZTMzZjgzMDEyMjIxMDc3NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Xu'
                    + '5UsO6VS90CsemI07dMUU6xjKcbTxQ1UrfGjC9iFjc'
            }
        };

        // if the call was succcesful then store the data gathered inside the results array
        fetch(urlSpecific, options)
            .then((res) => res.json())
            .then((data) => {
                if (data.total_results != 0) {
                    setSearchCardResults([])
                    setSearchCardResults(data.results);
                }
            })
            .catch((err) => console.error('error:' + err));
    }

    /* —————————————————————————————————————————————— - ————————————————————————————————————————————— */

    return (
        <div className=" total-container">
            <div className="browsing-container">

                <div className="search-input-wrapper">
                    <input id="search-bar" value={inputValue} className="search-input-editor" type="text" placeholder="Browse for Movies..." onChange={inputChange} onKeyDown={searchEnter} />
                    <button className="search-input-button" onClick={searchClick} >
                        <i className="icon fa-solid fa-magnifying-glass"></i>
                    </button>
                </div>

                {inputValue ? (
                    <div className="search-wrapper-list">
                        <ul className="unordered-list">
                            {searchMovieCards}
                        </ul>
                    </div>
                ) : (
                    <span />
                )}
            </div>

            <hr className="browsing-break" />
            <div className="browsing-card-container">
                <BrowsingSubheader browsingSubheaderTitle="Current Trending Movies" />
                <div className="browsing-main-content">
                    {movieCards}
                </div>
            </div>


        </div>
    )
}

export default SearchInput