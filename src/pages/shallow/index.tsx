import {useStore} from "../../store";
import {randomString} from "../../services/login";
import Token from "../../components/token";
import User from "../../components/user";
import {useNavigate} from "react-router-dom";

const Shallow = () => {
    console.log('shallow页面')
    const navigate = useNavigate()

    const userInfo = useStore(state => state.userInfo)
    const changeUserId = () => {
        userInfo.userId = 100;
        useStore.setState({userInfo})
    }
    const changeUserName = () => {
        userInfo.userName = 'wangWu';
        useStore.setState({userInfo})
    }


    return <div style={{display:'flex',flexDirection:'column',alignItems:'center'}}>
        <h1>Shallow</h1>
        <div>
            <button onClick={()=>{navigate('/login')}}>去登录页面</button>
            <button onClick={()=>{navigate('/')}}>去首页</button>
        </div>
        <Token/>
        <User/>
        <button onClick={()=>{useStore.setState({accessToken:randomString(30)})}}>修改accessToken</button>
        <button onClick={()=>{useStore.setState({refreshToken:randomString(10)})}}>修改accessToken</button>
        <button onClick={changeUserId}>修改userId</button>
        <button onClick={changeUserName}>修改userName</button>

    </div>
}

export default Shallow
