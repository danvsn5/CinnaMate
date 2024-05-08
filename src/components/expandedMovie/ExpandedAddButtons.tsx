import { Tooltip } from 'react-tooltip'

const ExpandedAddButtons = () => {
  return (
    

    <div className='exp-button-row'>
    <button className='exp-thumb-button exp-fav-button' data-tooltip-id="my-tooltip" data-tooltip-content="Add to Favourites" >
    <Tooltip id='my-tooltip' className='exp-tooltip' border="1px solid var(--light-purple)" delayShow={250} place='bottom' offset={30} arrowColor='var(--light-purple )'/>
        <i className="icon fa-solid fa-star exp-icon"></i>
    </button>
    <button className='exp-thumb-button exp-watched-button' data-tooltip-id="my-tooltip1" data-tooltip-content="Add to Watched" >
    <Tooltip id='my-tooltip1' className='exp-tooltip' border="1px solid var(--light-purple)" delayShow={250} place='bottom' offset={30} arrowColor='var(--light-purple )'/>

        <i className="icon fa-solid fa-eye exp-icon"></i>
    </button>
    <button className='exp-thumb-button exp-watchlist-button' data-tooltip-id="my-tooltip2" data-tooltip-content="Add to WatchList" >
    <Tooltip id='my-tooltip2' className='exp-tooltip' border="1px solid var(--light-purple)" delayShow={250} place='bottom' offset={30} arrowColor='var(--light-purple )'/>

        <i className="icon fa-solid fa-list exp-icon"></i>
    </button>
</div>

  )
}

export default ExpandedAddButtons