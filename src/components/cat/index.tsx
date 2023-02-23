import {FC} from "react";
import useURLLoader from "../../hooks/useURLLoader";

interface Props {
    type:number
}
const Cat:FC<Props> = ({type}) => {
    console.log('猫图页面')
    const [loading,data] = useURLLoader(type);

    return(
        <div style={{flexDirection:'column'}}>
            {
                loading ? <span>🐈读取中</span>
                    :
                    <div>
                        <img src={data[0].url} style={{width:300}} alt={'cat'}/>
                    </div>
            }
            <br/>
        </div>
    )
}

export default Cat
