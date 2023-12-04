import axios from '@app/axios';

export default async function registration({ username, password }) {
    const { data: resultRegistrationData } = await axios.post('/users/signup', {
        username,
        password,
    });

    localStorage.setItem('username', resultRegistrationData.username);

    return resultRegistrationData;
}
