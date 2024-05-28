import db from "../../../firebase.config";
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


                if (movies.favourites[movieId] == false) {
                    // if the movie is inside favourites, but the field value is false, return false, which will
                    // set the field value to true
                    return false;
                }

                // if the movie is inside favourites, return true, changing field value to false.
                return true

            } else {

                // if the element is not inside the database, return false, so the item will get
                // added to the database

                return false
            }

        } else if (list == "seen") {

            // looks inside the favourites list and checks whether or not the movie is in favs
            if (movies.seen.hasOwnProperty(movieId)) {


                if (movies.seen[movieId] == false) {
                    // if the movie is inside favourites, but the field value is false, return false, which will
                    // set the field value to true
                    return false;
                }

                // if the movie is inside favourites, return true, changing field value to false.
                return true

            } else {

                // if the element is not inside the database, return false, so the item will get
                // added to the database

                return false
            }

        } else {

            // looks inside the favourites list and checks whether or not the movie is in favs
            if (movies.watchlist.hasOwnProperty(movieId)) {


                if (movies.watchlist[movieId] == false) {
                    // if the movie is inside favourites, but the field value is false, return false, which will
                    // set the field value to true
                    return false;
                }

                // if the movie is inside favourites, return true, changing field value to false.
                return true

            } else {

                // if the element is not inside the database, return false, so the item will get
                // added to the database

                return false
            }

        }
    }

    // If the document doesn't exist or the movie is not in the specified list, return false
    return false;
}

export default checkIfExistsDB;
