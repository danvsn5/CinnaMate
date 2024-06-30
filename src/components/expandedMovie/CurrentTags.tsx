import { doc, getDoc } from "firebase/firestore";
import db from "../../../firebase.config";
import { useEffect, useState } from "react";

const collectTags = async ({ movieID }: any) => {

    const userDocRef = doc(db, "users", loggedInState.username);
    const userDoc = await getDoc(userDocRef);

    let existingTags: any = {};

    if (userDoc.exists()) {
        const userData = userDoc.data();
        existingTags = userData.movies?.tags || {};
    }

    const movieTags = existingTags[movieID] || [];

    return movieTags;
}



function CurrentTags({ movieID }: any) {

    // gets and displays all current tags for a movie
    const [tags, setTags] = useState<any[]>([]);

    useEffect(() => {
        const fetchTags = async () => {
            const fetchedTags = await collectTags({ movieID });
            setTags(fetchedTags);
        };

        fetchTags();
    }, [movieID]);



    let tagList = tags.map((tag: any, index: number) => (
        <div className="existing-tag">
            <hr className="break-tag-small extra" />
            <li key={index} className="existing-tag">
                <h1 className="existing-title">{tag.title}</h1>
                <h2 className="existing-content">{tag.content}</h2>
            </li>
            <hr className="break-tag-small extra" />
            <br />
        </div>

    ));

    if (tags.length === 0) {
        return null;
    }

    return (
        <div className="user-tag-content">
            <hr className="break-tag" />
            <h1 className='main-tagline tag'>My Tags</h1>
            <hr className="break-tag-small" />
            <div className="existing-tag-list">
                {tagList}
            </div>
        </div>
    )
}

export default CurrentTags