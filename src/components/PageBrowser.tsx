import Subheader from "./Subheader"
import SearchInput from "./browseMovies/SearchInput"

const PageBrowser = () => {
  return (

    <div className="main-content">
      <Subheader subheaderTitle="Browse Movies" />
      <div className="browsing-content">
        <SearchInput />
      </div>
    </div>

  )
}

export default PageBrowser