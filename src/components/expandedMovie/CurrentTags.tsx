import { doc, getDoc, setDoc } from "firebase/firestore";
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

    const [editingTag, setEditingTag] = useState<number | null>(null);

    const handleTagClick = (index: number) => {
        setEditingTag(index);
    };

    const handleTagSave = (index: number, updatedTag: any) => {

        // Update the tags state with the updated tag
        const updatedTags = [...tags];
        updatedTags[index] = updatedTag;
        setTags(updatedTags);
        setDoc(doc(db, "users", loggedInState.username), { movies: { tags: { [movieID]: updatedTags } } }, { merge: true });

        // Clear the editing state
        setEditingTag(null);
    };

    let tagList = tags.map((tag: any, index: number) => (
        <div className="existing-tag" key={index}>
            {editingTag === index ? (
                <TagEditor
                    tag={tag}
                    onSave={(updatedTag: any) => handleTagSave(index, updatedTag)}
                />
            ) : (
                <li className="existing-tag" onClick={() => handleTagClick(index)}>
                    <h1 className="existing-title">{tag.title}</h1>
                    <h2 className="existing-content">{tag.content}</h2>
                </li>
            )}
            <br />
        </div>
    ));

    function TagEditor({ tag, onSave }: { tag: any; onSave: (updatedTag: any) => void }) {
        const [updatedTitle, setUpdatedTitle] = useState(tag.title);
        const [updatedContent, setUpdatedContent] = useState(tag.content);

        const handleTitleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
            setUpdatedTitle(e.target.value);
        };

        const handleContentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
            setUpdatedContent(e.target.value);
        };

        const handleSave = () => {
            const updatedTag = { ...tag, title: updatedTitle, content: updatedContent };
            onSave(updatedTag);
        };

        const handleDelete = () => {
            // delete the tag and update the database with the removed tag
            const updatedTags = tags.filter((_t, index) => index !== editingTag);
            setTags(updatedTags);
            setDoc(doc(db, "users", loggedInState.username), { movies: { tags: { [movieID]: updatedTags } } }, { merge: true });
            setEditingTag(null);
        }

        return (
            <div className="tag-editor">
                <textarea className="editor tag-title" value={updatedTitle} onChange={handleTitleChange} rows={1} />
                <textarea className="editor tag-content" value={updatedContent} onChange={handleContentChange} rows={5} />
                <div className="tag-edit-button-wrapper">
                    <button className='exp-thumb-button edit-tag-button update' data-tooltip-id="my-tooltip3" data-tooltip-content="Delete Tag" onClick={handleDelete}>
                        <i className="icon fa-solid fa-trash"></i>
                    </button>
                    <button className='exp-thumb-button edit-tag-button update' data-tooltip-id="my-tooltip3" data-tooltip-content="Update Tag" onClick={handleSave}>
                        <i className="icon fa-solid fa-check"></i>
                    </button>
                </div>
            </div>
        );
    }

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