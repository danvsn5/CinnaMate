import checkIfExistsDB from "../utils/queryCheck";
import { doc, updateDoc } from "firebase/firestore";
import db from "../utils/firebaseini";

const AddButtons = ({ movie }: any) => {

    /* ——————————————————————————————————————— Add to Database —————————————————————————————————————— */

    async function addToFavourites() {
        // when clicking on the favourites button AND the user is logged in (based on a global
        // state variable), that movie is added to the database under a favourites field
        // 
        // if the item is already inside the database, determined by a pre-query, then the 
        // button will have a different appearence, and clicking on the button will reset the
        // appearence and remove it from the database 

        if (loggedInState.isLoggedIn == true) {

            const id: string = movie.id;

            if (await checkIfExistsDB(id, loggedInState.username, "favourites") == false) {
                // if the item is not inside the database, add it to database

                const data = {
                    favourites: { id: id }
                };

                await updateDoc(doc(db, "users", loggedInState.username), data);

            }


        }
    }

    function addToSeen() {

        const id = movie.id;
        console.log(id)
        console.log(loggedInState.isLoggedIn)
        console.log(loggedInState.username)

    }

    function addToWatchlist() {

        const id = movie.id;
        console.log(id)
        console.log(loggedInState.isLoggedIn)
        console.log(loggedInState.username)

    }

    // TODO: implement helper query functions to check whether or not an item is inside
    // the database and whether it is under favourites, seen or watchlist. Refactor functions
    // to utils folder with inputs as movie.id 

    return (
        <div className='button-row'>
            <button className='thumb-button fav-button' onClick={addToFavourites}>
                <i className="icon fa-solid fa-star"></i>
            </button>
            <button className='thumb-button watched-button' onClick={addToSeen}>
                <i className="icon fa-solid fa-eye"></i>
            </button>
            <button className='thumb-button watchlist-button' onClick={addToWatchlist}>
                <i className="icon fa-solid fa-list"></i>
            </button>
        </div>
    )
}

export default AddButtons