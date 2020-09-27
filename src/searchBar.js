import React from 'react';

function SearchBar (){
    return(
        <div className="search-bar">
            {/* To do later pass method via props for onChange */}
            <input placeholder="Search" onChange={(e)=>console.log('test search bar'+e.target.value)} />
        </div>
    )
}

export default SearchBar;