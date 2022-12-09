import MapBlock from "../MapBlock";

import TimeLine from "../TimeLine";

import './GroupName.css';

import 'swiper/css';
import "swiper/css/navigation";
import "swiper/css/scrollbar";


export default function GroupName(props){
    return(
        <section className="group-body">
            <h2 className="group-title" id={props.groupName}>Собрания группы "{props.groupName}"</h2>

            <div className="group__time-line">
                {props.address !== '' ? <h3 className="group-addres">Cобрание проходит по адерсу: {props.address}</h3> : ''}
                {props.infoGroup.map((item, idx) => <TimeLine
                    key={idx}
                    weekHow={item.weekNumb}
                    week={item.weekDay}
                    long={item.timeLong}
                    start={item.timeStart}
                    end={item.timeEnd}
                    subInfo={item.subInfo}
                    active={props.changeActive}
                />)}

            </div>
            {props.mapGroup !== '' ? <MapBlock photo={props.photo} mapSrc={props.mapGroup} /> : ''}
        </section>
    )
}
