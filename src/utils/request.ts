import axios from 'axios';
import {useStore} from "../store";

const httpConfig = {
    baseURL: 'https://dog.ceo'
};

const request = axios.create(httpConfig);

// 监听所有的变化，每次变化是将同步触发
const sub = useStore.subscribe((state, prevState) => {
    console.log('state ', state)
    console.log('prevState ', prevState)
})


request.interceptors.request.use((config) => {

    // 获得最新的状态,
    config.headers['accessToken'] = useStore.getState().accessToken


    console.log('config: ', config)

    return config;
});

request.interceptors.response.use(
    (response) => {
        // console.log("request.interceptors.response",response);
        return response;
    },
    (err) => {
        // console.log("*******err.response^^^^^^^", err);
        // 更新状态，将触发监听器
        useStore.setState({accessToken: null, refreshToken: null})
        // 取消订阅
        sub()
        // 销毁store(删除所有订阅)。
        // useStore.destroy()

        return Promise.reject(err);
    }
);

export default request;
