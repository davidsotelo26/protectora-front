import axios from 'axios';

export const getEntities = async () => {
    const res = await axios('http://localhost:3000/entities');
    const api = res.data.map(character => ({
        ...character,
    }));
    return api;
}
