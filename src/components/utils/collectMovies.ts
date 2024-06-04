import db from "../../../firebase.config";
import { doc, getDoc } from "firebase/firestore";

async function collectMovieIdDatabase(dbCatagory: string) {

    // function will only proceed if the user is currently logged in
    if (loggedInState.isLoggedIn === true) {

        const docRef = doc(db, "users", loggedInState.username);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {

            // variable instantiation
            const movies = docSnap.data().movies
            let trueIds: number[];

            /* ———————————————————————————————————— Cases Based on Input ———————————————————————————————————— */

            switch (dbCatagory) {

                case "favourites":
                    trueIds = Object.keys(movies.favourites)
                        .filter(id => movies.favourites[id])
                        .map(id => parseInt(id));

                    return trueIds

                case "seen":
                    trueIds = Object.keys(movies.seen)
                        .filter(id => movies.seen[id])
                        .map(id => parseInt(id));

                    return trueIds


                case "watchlist":

                    trueIds = Object.keys(movies.watchlist)
                        .filter(id => movies.watchlist[id])
                        .map(id => parseInt(id));

                    return trueIds

            }

        }

    }

}

export default collectMovieIdDatabase