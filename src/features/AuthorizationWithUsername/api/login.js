import axios from '@app/axios';

export default async function login({ username, password }) {
    return await axios.post(
        '/users/login',
        {
            username,
            password,
        },
        {
            withCredentials: true,
        },
    );
}
