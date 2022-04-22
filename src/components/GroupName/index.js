import MapBlock from "../MapBlock";
import TimeLine from "../TimeLine";
import './GroupName.css';

export default function GroupName(props){
    return(
        <section className="group-body">
            <h2 className="group-title">Собрания группы "{props.groupName}"</h2>
            
            <div className="group__time-line">
                {props.address !== '' ? <h3 className="group-addres">Cобрание проходит по адерсу: {props.address}</h3> : ''}
                {props.infoGroup.map((item, idx) => <TimeLine 
                    key={idx}
                    week={item.weekDay}
                    long={item.timeLong}
                    start={item.timeStart}
                    end={item.timeEnd}
                    subInfo={item.subInfo}
                    active={props.changeActive}
                />)}
            </div>
            {props.mapGroup !== '' ? <MapBlock mapSrc={props.mapGroup} /> : ''}
            
        </section>
    )
}
