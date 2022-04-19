import { useEffect, useState } from "react"
import ReactLoading from 'react-loading';

export default function Preloader(props){
    const [map, setMap] = useState();
    const [done, setDone] = useState(undefined);
    useEffect(() =>{
        fetch(props.map).then((res)=>{
            // console.log(res);
            res.json();
        }).then((json)=>{
            console.log(json);
            // setMap(json.url);
            setDone(true);
        })
    }, [])
    return (
        <>
            {!done ? <ReactLoading type={'cylon'} color="#000" height={'20%'} width={'20%'} /> : <iframe src={props.url}></iframe>}
        </>
    )

}