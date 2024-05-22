import { Tooltip } from "react-tooltip"

const MovieTag = () => {
    return (
        <div className='movie-tag'>
            <hr className="break-tag" />
            <h1 className='main-tagline tag'>Create Tag</h1>
            <h1 className="text-tag-label">Title and/or Timestamp</h1>
            <textarea className="editor tag-title" rows={1} spellCheck={false} wrap="soft" placeholder="Write the title and/or timestamp of your tag..."></textarea>
            <h1 className="text-tag-label">Tag Content</h1>
            <textarea className="editor tag-content" rows={5} maxLength={550} placeholder="Write your tag content..."></textarea>

            <button className='exp-thumb-button add-tag-button' data-tooltip-id="my-tooltip3" data-tooltip-content="Add Tag to Taglist" >
                <Tooltip id='my-tooltip3' className='exp-tooltip' border="1px solid var(--light-purple)" delayShow={250} place='bottom' offset={30} arrowColor='var(--light-purple )' />
                <i className="icon fa-solid fa-plus exp-icon"></i>
            </button>
        </div >
    )
}

export default MovieTag