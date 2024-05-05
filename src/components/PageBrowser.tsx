import Subheader from "./Subheader"
import SearchInput from "./browseMovies/SearchInput"
const PageBrowser = () => {

  //TODO: implement logic for taking user input from box and creating query based on their string input
  //      create some other map (possibly just trending results again) that gets displayed when no results
  // are shown from the user's input query
  //      implement filtering to only show most relevant results instead of garbage unusable results AND 
  // that must have a thumbnail

  // fetches API data for trending movies this week and stores data inside results array

  return (

    <div className="main-content">
      <Subheader subheaderTitle="Browse Movies" />
      <SearchInput />
    </div>

  )
}

export default PageBrowser