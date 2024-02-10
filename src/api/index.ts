import axios from 'axios';

const BASE_URL = 'https://tame-erin-pike-toga.cyclic.app/'

export default function request(path: string, options: RequestInit = {}){
    const { method } = options;

    return axios({
        url: `${BASE_URL}${path}`,
        method
    })
    .then(response => response.data)
    .catch(error => console.error(error));
}