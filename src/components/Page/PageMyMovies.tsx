import Subheader from "../Margin/Subheader"
import Tabs from "../My-Movies/Tabs"

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
