import {useStore} from "../../store";
import {useEffect} from "react";
import {getRandomDogList} from "../../services/dog";


const Dog = () => {
    console.log('狗图页面')
    const dogLoading = useStore((state)=>state.dog.loading)
    const dogUrl = useStore((state)=>state.dog.url)

    useEffect(()=>{
        useStore.setState({dog:{loading:true}})
        getRandomDogList().then(res=>{
            useStore.setState({dog:{url:res.data.message,loading:false}})
        })
    },[])

    return  dogLoading ? <span>🐶读取中</span>
        :
        <img src={dogUrl} style={{width:300}} alt={'dog'}/>
}

export default Dog
