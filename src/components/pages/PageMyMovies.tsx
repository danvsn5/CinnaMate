import Subheader from "../margins/Subheader"
import Tabs from "../myMoviesTab/Tabs"

const PageMyMovies = () => {

  PageID.pageIdentifier = "MyMovies"
  PageID.onMovie = false

  return (

    <div className="main-content">
      <Subheader subheaderTitle="My Movies" />
      <Tabs />
    </div>

  )
}

export default PageMyMovies
