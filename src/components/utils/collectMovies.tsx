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

                    /* ———————————————————————————————— Iterate through each Element ———————————————————————————————— */

                    for (let i = 0; i < trueIds.length; i++) {

                        const element = trueIds[i];
                        const url = `https://api.themoviedb.org/3/movie/${element}?language=en-US`;
                        const options = {
                            method: 'GET',
                            headers: {
                                accept: 'application/json',
                                Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1YWIxNjYwNWY5MzQ5MzJiYzk4N2NlZTJjYjRiZGMwYyIsInN1YiI6IjY2MmNmMTk1ZTMzZjgzMDEyMjIxMDc3NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Xu5UsO6VS90CsemI07dMUU6xjKcbTxQ1UrfGjC9iFjc'
                            }
                        };

                        fetch(url, options)
                            .then((res: any) => res.json())
                            .then((data: any) => {

                                console.log(data.title)

                            })
                            .catch((err: any) => console.error('error:' + err));


                    }

                    break;
                case "seen":
                    trueIds = Object.keys(movies.seen)
                        .filter(id => movies.seen[id])
                        .map(id => parseInt(id));

                    /* ———————————————————————————————— Iterate through each Element ———————————————————————————————— */

                    for (let i = 0; i < trueIds.length; i++) {
                        // const element = trueIds[i];
                    }
                    break;
                case "watchlist":

                    trueIds = Object.keys(movies.watchlist)
                        .filter(id => movies.watchlist[id])
                        .map(id => parseInt(id));

                    /* ———————————————————————————————— Iterate through each Element ———————————————————————————————— */

                    for (let i = 0; i < trueIds.length; i++) {
                        //const element = trueIds[i];
                    }

                    break;
            }

        }

    }

}

export default collectMovieIdDatabase