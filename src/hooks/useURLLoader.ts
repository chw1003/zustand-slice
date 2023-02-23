import  {useState, useEffect} from "react";
import {getCat} from "../services/cat";

const useURLLoader = (type:number) =>{
    const [data,setData]=useState<any>();
    const [loading,setLoading]=useState(true);

    useEffect(()=>{
        setLoading(true);
        getCat(type).then((result)=>{
            setData(result.data);
            setLoading(false)
        })

    },[type]);
    return [loading,data];
};

export default useURLLoader
