import React from 'react'



function Booklist(props){
    console.log(props)
return (
<div className="book-container">
    <ul>
{props.booklist.map((item) => <li>{item.volumeInfo.authors}{item.volumeInfo.title}</li>)}

    </ul>
</div>

)
}

export default Booklist