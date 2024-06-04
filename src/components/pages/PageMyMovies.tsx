import Subheader from "../margins/Subheader"
import Tabs from "../myMoviesTab/Tabs"
import TabContent from "../myMoviesTab/TabContent"

const PageMyMovies = () => {
  return (

    <div className="main-content">
      <Subheader subheaderTitle="My Movies" />
      <Tabs />
      <hr className="browsing-break" />
      <TabContent />
    </div>

  )
}

export default PageMyMovies
