import axios from '@app/axios';

export default async function registration() {
    const { data: resultRegistrationData } = await axios.post('/users/signup');
    localStorage.setItem('username', resultRegistrationData.username);
}
