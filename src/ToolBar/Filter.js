import React from 'react';

function Filter(props) {
    return (
        <div className="filter-bar-container">
            <select className="print-type">
                <option>All</option>
                <option onChange={props.filter('BOOK')}>Book</option>
                <option onChange={props.filter('MAGAZINE')}>Magazine</option>
                </select>
        </div>
    );
}

export default Filter