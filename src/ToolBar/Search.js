import React from 'react'





function Search(props){
    function fetchBooks(event) {
        event.preventDefault()
        fetch(`https://www.googleapis.com/books/v1/volumes?q=${event.target.search.value}`)
            .then(response => response.ok ? response.json() : Promise.reject('Something bad happened'))
            .then(response => {
                props.search(response.items)
            })
    }
    return (
    <div className="search-container">
        <form onSubmit={fetchBooks}>
        <input name="search" label="search" className="search-bar" type="text" placeholder="search"></input>
        <button type="submit">search</button>
        </form>
    </div>
    )
}



export default Search