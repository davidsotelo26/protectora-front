import axios from 'axios';

export const getAnimals = async () => {
    const res = await axios('http://localhost:3000/animals');
    const api = res.data.map(character => ({
        ...character,
    }));
    return api;
}
