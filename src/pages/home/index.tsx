import Dog from "../../components/dog";
import Cat from "../../components/cat";
import {useUserInfoExist} from "../../store";
import {useNavigate} from "react-router-dom";

const Home = () => {
    console.log('首页')
    const navigate = useNavigate()

    const existUser = useUserInfoExist()

    return <div style={{display:'flex',flexDirection:'column',alignItems:'center'}}>
        <h1>首页</h1>
        <div>
            <button onClick={()=>{navigate('/login')}}>去登录页面</button>
            <button onClick={()=>{navigate('/shallow')}}>去Shallow页面</button>
        </div>
        {/*用户没有登录显示狗图，用户登录了根据用户喜爱的猫种类显示猫图，具体逻辑看services/login下的登录请求逻辑*/}
        {
            existUser.exist ?
                <Cat type={existUser.userInfo!.favoriteCatCategory!}/>
                :
                <Dog/>
        }
    </div>
}

export default Home
