import MovieList from "../utils/collectMovies"

const TabContent = () => {

    // create a query to database that stores all the movie ids.
    // create new query to API, collecting the movie info from the database 
    // add the result of these queries to a result array map and then parse that 
    // parse this through via a list of cards and display under the tab-main-content



    return (
        <div className="">
            <MovieList dbCategory="favourites"/>
        </div>
    )
}

export default TabContent