import axios from 'axios';

export const getAnimalById = async (id) => {
    const res = await axios.get(`http://localhost:3000/animals/${id}`);
    const api = res.data.map(animal => ({
        ...animal,
    }));
    return api;
}