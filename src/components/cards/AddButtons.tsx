import checkIfExistsDB from "../utils/queryCheck";
import { doc, setDoc } from "firebase/firestore";
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
                    movies: {
                        favourites: {
                            [id]: true
                        }
                    }
                };

                await setDoc(doc(db, "users", loggedInState.username), data, { merge: true });
            } else {
                // if the item is inside the database, change the field value to false.

                const data = {
                    movies: {
                        favourites: {
                            [id]: false
                        }
                    }
                };

                await setDoc(doc(db, "users", loggedInState.username), data, { merge: true });
            }
        }
    }

    async function addToSeen() {

        if (loggedInState.isLoggedIn == true) {

            const id: string = movie.id;

            if (await checkIfExistsDB(id, loggedInState.username, "seen") == false) {
                // if the item is not inside the database, add it to database

                const data = {
                    movies: {
                        seen: {
                            [id]: true
                        }
                    }
                };

                await setDoc(doc(db, "users", loggedInState.username), data, { merge: true });
            } else {
                // if the item is inside the database, change the field value to false.

                const data = {
                    movies: {
                        seen: {
                            [id]: false
                        }
                    }
                };

                await setDoc(doc(db, "users", loggedInState.username), data, { merge: true });
            }
        }

    }

    async function addToWatchlist() {

        if (loggedInState.isLoggedIn == true) {

            const id: string = movie.id;

            if (await checkIfExistsDB(id, loggedInState.username, "watchlist") == false) {
                // if the item is not inside the database, add it to database

                const data = {
                    movies: {
                        watchlist: {
                            [id]: true
                        }
                    }
                };

                await setDoc(doc(db, "users", loggedInState.username), data, { merge: true });
            } else {
                // if the item is inside the database, change the field value to false.

                const data = {
                    movies: {
                        watchlist: {
                            [id]: false
                        }
                    }
                };

                await setDoc(doc(db, "users", loggedInState.username), data, { merge: true });
            }
        }

    }

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