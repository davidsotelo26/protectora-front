import axios from 'axios';

export const getUsers = async () => {
    const res = await axios('http://localhost:3000/users');
    const api = res.data.map(character => ({
        ...character,
    }));
    return api;
}
