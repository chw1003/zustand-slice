import {useStore} from "../../store";

const User = () => {
    console.log('用户页面')
    const userName = useStore(state => state.userInfo.userName)
    const userId = useStore(state => state.userInfo.userId)
    return <div>
        <div>{`userId: ${userId}`}</div>
        <div>{`userName: ${userName}`}</div>
    </div>
}

export default User
