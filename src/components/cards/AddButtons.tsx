const AddButtons = ({ movie }: any) => {

    /* ——————————————————————————————————————— Add to Database —————————————————————————————————————— */

    function addToFavourites() {
        // when clicking on the favourites button AND the user is logged in (based on a global
        // state variable), that movie is added to the database under a favourites field

        const id = movie.id;
        console.log(id)
        console.log(loggedInState.isLoggedIn)
        console.log(loggedInState.username)

    }

    return (
        <div className='button-row'>
            <button className='thumb-button fav-button' onClick={addToFavourites}>
                <i className="icon fa-solid fa-star"></i>
            </button>
            <button className='thumb-button watched-button'>
                <i className="icon fa-solid fa-eye"></i>
            </button>
            <button className='thumb-button watchlist-button'>
                <i className="icon fa-solid fa-list"></i>
            </button>
        </div>
    )
}

export default AddButtons