import React, { useEffect, useState } from 'react';
import checkIfExistsDB from "../utils/queryCheck";
import { doc, setDoc } from "firebase/firestore";
import db from "../utils/firebaseini";

const AddButtons = ({ movie }: any) => {
    const [favouritesState, setFavouritesState] = useState<boolean | null>(null);
    const [seenState, setSeenState] = useState<boolean | null>(null);
    const [watchlistState, setWatchlistState] = useState<boolean | null>(null);

    useEffect(() => {
        const fetchInitialState = async () => {
            const isFavourite = await checkIfExistsDB(movie.id, loggedInState.username, "favourites");
            const isSeen = await checkIfExistsDB(movie.id, loggedInState.username, "seen");
            const isWatchlist = await checkIfExistsDB(movie.id, loggedInState.username, "watchlist");

            setFavouritesState(isFavourite);
            setSeenState(isSeen);
            setWatchlistState(isWatchlist);
        };

        fetchInitialState();
    }, [movie.id]);

    const handleUpdate = async (list: string, currentState: boolean | null, setState: React.Dispatch<React.SetStateAction<boolean | null>>) => {
        if (loggedInState.isLoggedIn) {
            const id: string = movie.id;
            const newValue = !currentState;

            const data = {
                movies: {
                    [list]: {
                        [id]: newValue
                    }
                }
            };

            await setDoc(doc(db, "users", loggedInState.username), data, { merge: true });
            setState(newValue);
        }
    };

    const addToFavourites = () => handleUpdate("favourites", favouritesState, setFavouritesState);
    const addToSeen = () => handleUpdate("seen", seenState, setSeenState);
    const addToWatchlist = () => handleUpdate("watchlist", watchlistState, setWatchlistState);

    return (
        <div className='button-row'>
            <button className={`thumb-button fav-button ${favouritesState ? 'active' : ''}`} onClick={addToFavourites}>
                <i className="icon fa-solid fa-star"></i>
            </button>
            <button className={`thumb-button watched-button ${seenState ? 'active' : ''}`} onClick={addToSeen}>
                <i className="icon fa-solid fa-eye"></i>
            </button>
            <button className={`thumb-button watchlist-button ${watchlistState ? 'active' : ''}`} onClick={addToWatchlist}>
                <i className="icon fa-solid fa-list"></i>
            </button>
        </div>
    );
};

export default AddButtons;
