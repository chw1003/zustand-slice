import request from '../../utils/request';

export function getCat(type:number) {
    return request(`https://api.thecatapi.com/v1/images/search`, {
        method: 'GET',
        params:{
            limit:1,
            page:0,
            category_ids:type
        }
    });
}
