import db from "./firebaseini";
import { doc, getDoc } from "firebase/firestore";

async function checkIfExistsDB(movieId: string, username: string, location: string) {

    // gets the user's database items
    const docRef = doc(db, "users", username);
    const docSnap = await getDoc(docRef);

    // gets all the elements in the users location list ie. favourites
    const dbMovie = docSnap.get(location)

    // if the movie is in favourites return true; if it is not, return false
    if (dbMovie.hasOwnProperty(movieId) == true) {

        return true

    } else {

        return false;
    }

}

export default checkIfExistsDB