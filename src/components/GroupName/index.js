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
                    weekHow={item.weekNumb}
                    week={item.weekDay}
                    long={item.timeLong}
                    startHour={item.timeStartHour}
                    startMin={item.timeStartMin}
                    endHour={item.timeEndHour}
                    endMin={item.timeEndMin}
                    subInfo={item.subInfo}
                />)}
            </div>
            {props.mapGroup !== '' ? <MapBlock mapSrc={props.mapGroup} /> : ''}
        </section>
    )
}
