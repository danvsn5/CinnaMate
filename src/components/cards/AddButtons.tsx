const AddButtons = () => {
  return (
    <div className='button-row'>
        <button className='thumb-button fav-button'>
            <i className="icon fa-solid fa-star"></i>
        </button>
        <button className='thumb-button watched-button'>
        <i className="icon fa-solid fa-eye"></i>
        </button>
        <button className='thumb-button watchlist-button'>
        <i className="icon fa-solid fa-list"></i>
        </button>
    </div>
  )
}

export default AddButtons