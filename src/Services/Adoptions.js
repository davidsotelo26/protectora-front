import axios from 'axios';

export const getAdoptions = async () => {
    const res = await axios('http://localhost:3000/adoptions');
    const api = res.data.map(character => ({
        ...character,
    }));
    return api;
}
