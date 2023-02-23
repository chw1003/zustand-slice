import request from '../../utils/request';

export function getRandomDogList() {
    return request(`/api/breeds/image/random`, {
        method: 'GET'
    });
}
