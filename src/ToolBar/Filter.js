import React from 'react';

function Filter(props) {
    return (
        <div className="filter-bar-container">
            <select onChange={(e) => props.filter(e)} className="print-type">
                <option>All</option>
                <option >Book</option>              
                <option >Magazine</option>
                </select>
        </div>
    );
}

export default Filter