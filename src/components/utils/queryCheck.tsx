import db from "./firebaseini";
import { doc, getDoc } from "firebase/firestore";

async function checkIfExistsDB(movieId: string, username: string, list: string) {
    // gets the user's database items
    const docRef = doc(db, "users", username);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
        // data from the user
        const data = docSnap.data();

        // access the 'movies' field and then the specified list (e.g., 'favourites', 'seen', 'watchlist')
        const movies = data.movies;

        if (list == "favourites") {

            // looks inside the favourites list and checks whether or not the movie is in favs
            if (movies.favourites.hasOwnProperty(movieId)) {

                console.log("This element is inside the database for FAVS")

                // if the element is inside the database, return true, so the item will get
                // changed to false inside the database

                return true

            } else {

                // if the element is not inside the database, return false, so the item will get
                // added to the database
                
                return false
            }

        } else if (list == "seen") {

            // looks inside the favourites list and checks whether or not the movie is in seen
            if (movies.seen.hasOwnProperty(movieId)) {
                console.log("This element is inside the database for SEEN")
                // if the element is not inside the database, return false, so the item will get
                // added to the database
                return false
            } else {
                // if the element is inside the database, return true, so the item will get
                // changed to false inside the database
                return true
            }

        } else {

            // looks inside the favourites list and checks whether or not the movie is in watchlist
            if (movies.watchlist.hasOwnProperty(movieId)) {
                console.log("This element is inside the database for WATCHLIST")
                // if the element is not inside the database, return false, so the item will get
                // added to the database
                return false
            } else {
                // if the element is inside the database, return true, so the item will get
                // changed to false inside the database
                return true
            }

        }
    }

    // If the document doesn't exist or the movie is not in the specified list, return false
    return false;
}

export default checkIfExistsDB;
