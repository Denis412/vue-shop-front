import axios from 'axios';

axios.defaults.withCredentials = true;

const instance = axios.create({
    baseURL: import.meta.env.API_URL || 'https://localhost:3000/',
    withCredentials: true,
});

export default instance;
