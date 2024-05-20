const MovieTag = () => {
    return (
        <div className='movie-tag'>
            <hr className="break-tag" />
            <h1 className='main-tagline tag'>Create Tag</h1>

            <h1 className="text-tag-label">Title and/or Timestamp</h1>
            <textarea className="editor tag-title" rows={1} spellCheck={false} wrap="soft" placeholder="Write the title and/or timestamp of your tag..."></textarea>
            <h1 className="text-tag-label">Tag Content</h1>
            <textarea className="editor tag-content" rows={5} maxLength={550} placeholder="Write your tag content..."></textarea>

        </div>
    )
}

export default MovieTag