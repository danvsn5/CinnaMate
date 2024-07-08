import { Tooltip } from 'react-tooltip'
import { useState, useEffect } from 'react';
import checkIfExistsDB from '../utils/queryCheck';
import { doc, setDoc } from 'firebase/firestore';
import db from '../../../firebase.config';
import movieType from '../utils/movieType';

const ExpandedAddButtons = ({ movie }: {movie: movieType}) => {

  const [favouritesState, setFavouritesState] = useState<boolean | null>(null);
  const [seenState, setSeenState] = useState<boolean | null>(null);
  const [watchlistState, setWatchlistState] = useState<boolean | null>(null);

  useEffect(() => {
    const fetchInitialState = async () => {

      if (loggedInState.isLoggedIn == true) {

        const isFavourite = await checkIfExistsDB(movie.id, loggedInState.username, "favourites");
        const isSeen = await checkIfExistsDB(movie.id, loggedInState.username, "seen");
        const isWatchlist = await checkIfExistsDB(movie.id, loggedInState.username, "watchlist");


        setFavouritesState(isFavourite);
        setSeenState(isSeen);
        setWatchlistState(isWatchlist);
      }


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
    <div className='exp-button-row'>

      {favouritesState ? (

        <button className='exp-thumb-button exp-fav-button active' data-tooltip-id="my-tooltip" data-tooltip-content="Remove from Favourites" onClick={addToFavourites}>
          <Tooltip id='my-tooltip' className='exp-tooltip' border="1px solid var(--light-purple)" delayShow={250} place='bottom' offset={30} arrowColor='var(--light-purple )' />
          <i className="icon fa-solid fa-star exp-icon"></i>
        </button>

      ) : (

        <button className='exp-thumb-button exp-fav-button' data-tooltip-id="my-tooltip" data-tooltip-content="Add to Favourites" onClick={addToFavourites}>
          <Tooltip id='my-tooltip' className='exp-tooltip' border="1px solid var(--light-purple)" delayShow={250} place='bottom' offset={30} arrowColor='var(--light-purple )' />
          <i className="icon fa-solid fa-star exp-icon"></i>
        </button>

      )}

      {seenState ? (
        <button className='exp-thumb-button exp-watched-button active' data-tooltip-id="my-tooltip1" data-tooltip-content="Remove from Seen" onClick={addToSeen}>
          <Tooltip id='my-tooltip1' className='exp-tooltip' border="1px solid var(--light-purple)" delayShow={250} place='bottom' offset={30} arrowColor='var(--light-purple )' />
          <i className="icon fa-solid fa-eye exp-icon"></i>
        </button>
      ) : (
        <button className='exp-thumb-button exp-watched-button' data-tooltip-id="my-tooltip1" data-tooltip-content="Add to Seen" onClick={addToSeen}>
          <Tooltip id='my-tooltip1' className='exp-tooltip' border="1px solid var(--light-purple)" delayShow={250} place='bottom' offset={30} arrowColor='var(--light-purple )' />
          <i className="icon fa-solid fa-eye exp-icon"></i>
        </button>
      )
      }

      {watchlistState ? (
        <button className='exp-thumb-button exp-watchlist-button active' data-tooltip-id="my-tooltip2" data-tooltip-content="Remove from WatchList" onClick={addToWatchlist}>
          <Tooltip id='my-tooltip2' className='exp-tooltip' border="1px solid var(--light-purple)" delayShow={250} place='bottom' offset={30} arrowColor='var(--light-purple )' />
          <i className="icon fa-solid fa-list exp-icon"></i>
        </button>
      ) : (
        <button className='exp-thumb-button exp-watchlist-button' data-tooltip-id="my-tooltip2" data-tooltip-content="Add to WatchList" onClick={addToWatchlist}>
          <Tooltip id='my-tooltip2' className='exp-tooltip' border="1px solid var(--light-purple)" delayShow={250} place='bottom' offset={30} arrowColor='var(--light-purple )' />
          <i className="icon fa-solid fa-list exp-icon"></i>
        </button>
      )}


    </div>
  )
}

export default ExpandedAddButtons