import axios from 'axios';

axios.defaults.withCredentials = true;

const instance = axios.create({
    baseURL: import.meta.env.API_URL || 'http://localhost:3000/',
    withCredentials: true,
});

export default instance;
