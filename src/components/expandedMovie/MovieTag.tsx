import { Tooltip } from "react-tooltip"
import { doc, setDoc, getDoc } from "firebase/firestore";
import db from "../../../firebase.config";
import { useState } from "react";

const MovieTag = ({ movieID }: any) => {

    const [tagTitle, setTitle] = useState("")
    const [tagContent, setContent] = useState("")

    const inputTitleChange = (e: any) => {
        setTitle(e.currentTarget.value)
    }
    const inputContentChange = (e: any) => {
        setContent(e.currentTarget.value)
    }

    // upon clicking the add tag button, the database is updated with the contents from the tag title and the tag content
    // tags element in database will contain a movie id, and all associated tags with their titles and content
    const handleClick = async () => {
        if (loggedInState.isLoggedIn) {
            const userDocRef = doc(db, "users", loggedInState.username);
            const userDoc = await getDoc(userDocRef);

            let existingTags: any = {};

            if (userDoc.exists()) {
                const userData = userDoc.data();
                existingTags = userData.movies?.tags || {};
            }

            const movieTags = existingTags[movieID] || [];
            const newTag = {
                title: tagTitle,
                content: tagContent
            };
            movieTags.push(newTag);

            const updatedTags = {
                ...existingTags,
                [movieID]: movieTags
            };

            const data = {
                movies: {
                    tags: updatedTags,
                    seen: {
                        [movieID]: true
                    }
                }
            };

            // if either the tag title or tag content is empty, the tag will not be added to the database
            if (tagTitle === "" || tagContent === "") {
                return
            }
            else {
                await setDoc(userDocRef, data, { merge: true });
                window.location.reload();
            }
        };
    }

    return (
        <div className='movie-tag'>
            <hr className="break-tag" />
            <h1 className='main-tagline tag'>Create Tag</h1>
            <h1 className="text-tag-label">Title and/or Timestamp</h1>
            <textarea className="editor tag-title" rows={1} spellCheck={false} wrap="soft" placeholder="Write the title and/or timestamp of your tag..." onChange={inputTitleChange} />
            <h1 className="text-tag-label">Tag Content</h1>
            <textarea className="editor tag-content" spellCheck={false} rows={5} maxLength={550} placeholder="Write your tag content..." onChange={inputContentChange} />
            <button className='exp-thumb-button edit-tag-button' data-tooltip-id="my-tooltip3" data-tooltip-content="Add Tag to Taglist" onClick={handleClick}>
                <Tooltip id='my-tooltip3' className='exp-tooltip' border="1px solid var(--light-purple)" delayShow={250} place='bottom' offset={30} arrowColor='var(--light-purple )' />
                <i className="icon fa-solid fa-plus exp-icon"></i>
            </button>
        </div >
    )
}

export default MovieTag