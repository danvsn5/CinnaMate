import { Link } from "react-router-dom"

function ExpandedSubheader(props: any) {
    // renders the subheader for the expanded movie page based on the title of movie and return links to the 
    // previous page: either the browsing page or the home page
    return (
        <div className="subheader-container">
            <div className="subheader">
                <div id='exp-subheader' className="exp-subheader-title">
                    <h1> <span>&#x200B;</span> {props.subheaderTitle}</h1>
                    {(PageID.pageIdentifier == "Home" && PageID.onMovie == true && window.innerWidth > 1000) && <Link to="/">
                        <button className="exp-return-button">Return</button>
                    </Link>}
                    {(PageID.pageIdentifier == "Browse" && PageID.onMovie == true && window.innerWidth > 1000) && <Link to="/browser">
                        <button className="exp-return-button">Return</button>
                    </Link>}
                    {(PageID.pageIdentifier == "MyMovies" && PageID.onMovie == true && window.innerWidth > 1000) && <Link to="/movies">
                        <button className="exp-return-button">Return</button>
                    </Link>}
                </div>
            </div>
            <hr className="break" />
        </div>
    )
}

export default ExpandedSubheader