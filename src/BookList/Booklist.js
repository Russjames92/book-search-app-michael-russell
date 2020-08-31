import React from 'react'



function Booklist(props) {
    return (
        <div className="book-container">
            <ul>
                {props.booklist.map((item) =>
                    <li>
                        <h1>{item.volumeInfo.title}</h1>
                        <h6>{item.volumeInfo.authors}</h6>
                        <p>{item.volumeInfo.description}</p>
                    </li>)}

            </ul>
        </div>

    )
}

export default Booklist