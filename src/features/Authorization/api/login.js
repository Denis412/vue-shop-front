import axios from '@app/axios';

export default async function login() {
    await axios.post('/users/login', {
        username: localStorage.getItem('username'),
        password: import.meta.env.VITE_USER_PASSWORD,
    });
}
