import './serviceOnGroup.css';

export default function ServiceOnGroup(props){
    return(
        <>
        {props.data.map((item, idx) =>(
            <ul className="service-row" key={idx}>
                <li className="service-name">{item.name}</li>
                <li className="service-aLot">Срок служения: {item.aLot}</li>
                <li className="service-clear">Срок чистоты: {item.clear}</li>
                <li className="service-button"></li>
            </ul>
        ))}
        </>
    )
}