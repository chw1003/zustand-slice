import {User} from "../../store/user";

type UserType = Omit<User, "resetUser">;

export function randomString(length: number) {
    let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let tmp = '',
        l = str.length;
    for (let i = 0; i < length; i++) {
        tmp += str.charAt(Math.floor(Math.random() * l));
    }
    return tmp;
}

interface UserInfo extends UserType{
    accessToken: string;
    refreshToken: string
}

export function login(params: { username: string; password: string }): Promise<UserInfo> {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const userId = Math.floor(Math.random() * (10000))
            resolve({
                userInfo:{
                    userId:userId,
                    userName: params.username,
                    nickName:'zhangSan',
                    favoriteCatCategory:userId > 5000?15:5,
                },
                accessToken: randomString(30),
                refreshToken: randomString(10),
            })
        }, 2000)
    })
}
