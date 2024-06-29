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
    
    //console.log(tags);

    // tags.forEach(element => {

    //     // map each tag to a div h1 element for the tag title and 

    // });

    // map tag title and content to a div element with h1 as the title and h2 as the content 

    let tagList = tags.map((tag: any, index: number) => (
        <li key={index} className="tag-content">
            <h1 className="tag-title">{tag.title}</h1>
            <h2 className="tag-content">{tag.content}</h2>
        </li>
    ));

    return (
        <div className="user-tag-content">
            <hr className="break-tag" />
            <h1 className='main-tagline tag'>My Tags</h1>
            <hr className="break-tag-small" />
            {tagList}
        </div>
    )
}

export default CurrentTags