import { useState } from "react"

const SearchInput = () => {

    // MAIN FUNCTIONALITY
    // ---
    // upon loading the page, browsing-sub-sub title will display trending movies at that time 
    // upon inputting a string inside the text editor (maybe) a short list of 2-3 movies will show
    // underneath the search bar; to view full list of movies, the user clicks the search button,
    // causing the browsing-sub-sub title to change to whatever the input string was (reformatted)
    // and the cards to display like how they are displayed in the home trending page.  

    let [inputValue, setInputValue] = useState("")

    const inputChange = (e: any) => {
        setInputValue(e.currentTarget.value)
    }

    const searchClick = (e: any) => {
        setTextChange(e);
    }

    const setTextChange = (e:any) => {
        const text = document.getElementById("subheader-title-inner-content")
        text?.style.setProperty('text-decoration', 'underline')
        text?.style.setProperty('text-decoration-thickness', 'from-font')
    }

    return (
        <div className="search-input-wrapper">
            <input className="search-input-editor" type="text" placeholder="Browse for Movies..." onChange={inputChange} />
            <button className="search-input-button" onClick={searchClick}>
                <i className="icon fa-solid fa-magnifying-glass"></i>
            </button>
        </div>
    )
}

export default SearchInput