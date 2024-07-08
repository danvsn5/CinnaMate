import Subheader from "../Margin/Subheader"
import SearchInput from "../Browse/SearchInput"
const PageBrowser = () => {
  // initialise page variable
  PageID.pageIdentifier = "Browse"
  PageID.onMovie = false
  return (
    <div className="main-content">
      <Subheader subheaderTitle="Browse Movies" />
      <SearchInput />
    </div>
  )
}
export default PageBrowser