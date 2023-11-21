import React, { useState, useEffect } from 'react';
import { getCharacter, handleSearch } from './array.js';

function Api() {
    const [characters, setCharacters] = useState([]);
    const [filteredCharacters, setFilteredCharacters] = useState([]);

    useEffect(() => {
        const fetchCharacter = async () => {
            const api = await getCharacter();
            setCharacters(api);
        } 
        fetchCharacter();
    }, []);

    const search = (searchTerm) => {
        const filtered = handleSearch(characters, searchTerm);
        setFilteredCharacters(filtered);
    }
    filteredCharacters.map((character) => (
        <div>
            <h1>{character.name}</h1>
        </div>
    ))
    return (
        <div>
            <h1>Api</h1>
        </div>
    )
}

export default Api;