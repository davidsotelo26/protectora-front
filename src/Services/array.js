import axios from 'axios';

export const getCharacter = async () => {
    const res = await axios('http://localhost:3000');
    const api = res.data.map(character => ({
        ...character,
    }));
    return api;
}

export const handleSearch = (characters, searchTerm) => {
    const filtered = characters.filter((character) => character.name.toLowerCase().includes(searchTerm.toLowerCase()));
    return filtered;
}