// SearchBar.js
import React from 'react';
import { Input } from 'reactstrap'; // Assurez-vous d'importer Input de Reactstrap

const SearchBar = ({ onSearch }) => {
    return (
        <Input
            type="search"
            className="search-bar"
            placeholder="Search..."
            onChange={(e) => onSearch(e.target.value)}
        />
    );
};

export default SearchBar;
