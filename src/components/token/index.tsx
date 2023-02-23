import {useTokenAndUserName} from "../../store";


const TokenInfo = () => {
    console.log('token页面')
    const {accessToken, refreshToken} = useTokenAndUserName()
    return <div>
        <div>{`accessToken: ${accessToken}`}</div>
        <div>{`refreshToken: ${refreshToken}`}</div>
    </div>
}

export default TokenInfo
