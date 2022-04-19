import { useEffect, useState } from "react"
import ReactLoading from 'react-loading';
import './mapBlock.css';

export default function Preloader(props){
    const [map, setMap] = useState();
    const [done, setDone] = useState(undefined);
    useEffect(() =>{
        fetch(props.map).then((res)=>{
            res.json();
            console.log(res);
        }).then((mapData)=>{
            console.log(mapData);
            setDone(true);
        });
    }, [])
    return (
        <>
            {/* {!done ? <ReactLoading type={'cylon'} color="#000" height={'20%'} width={'20%'} /> : } */}
        </>
    )

}