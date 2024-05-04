
const ExpandedAddButtons = () => {
  return (
    

    <div className='exp-button-row'>
    <button className='exp-thumb-button exp-fav-button'>
        <i className="icon fa-solid fa-star exp-icon"></i>
    </button>
    <button className='exp-thumb-button exp-watched-button'>
        <i className="icon fa-solid fa-eye exp-icon"></i>
    </button>
    <button className='exp-thumb-button exp-watchlist-button'>
        <i className="icon fa-solid fa-list exp-icon"></i>
    </button>
</div>

  )
}

export default ExpandedAddButtons