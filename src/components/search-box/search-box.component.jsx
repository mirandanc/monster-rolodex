import React from 'react';

import './search-box.style.css';

export const SearchBox = ({placeholder, handleChage}) => (
    <input 
        className='search'
        type='search' 
        placeholder= {placeholder} 
        onChange={handleChage}/>  
)