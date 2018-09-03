import React from 'react';
import "./Search.css"

const Search = (props) => {
    return (
        <div className='search'>
            <input
                type="text"
                placeholder="search"
                onChange={ props.search }

            />
        </div>
    );
}
export default Search; 