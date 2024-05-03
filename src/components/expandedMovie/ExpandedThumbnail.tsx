
// thumbnail element used within cards to be displayed to user
const ExpandedThumbnail = ({ path }: any) => {

    return (
        <div className="expanded-thumbnail">
            {path ? (

                <img className="actual-expanded-thumb" src={`https://image.tmdb.org/t/p/w780${path}`} alt="Not Found" />
            ) : (
                <div className="poster-not-found"></div>
            )}
        </div>
    )
}

export default ExpandedThumbnail