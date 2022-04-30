import subInfo from '../../assets/img/sub-info.png';
import time from '../../assets/img/timeGreen.png';
import block from '../../assets/img/block.png';
import './timeLine.css';

export default function TimeLine(props){
    let data = new Date();
    let hour = data.getHours();
    let min = data.getMinutes();
    let week = data.getDay();
    return(
        <div className="time-line__row">
            <div className="time-line__week">{props.week}</div>
            <div className="time-line__status">
                <img 
                    src={((hour === props.startHour && min === props.startMin) || (hour < props.endHour || min < props.endMin)) && week === props.weekHow ? time : block } 
                    className="time-line__img" alt="time"
                />
                {((hour === props.startHour && min === props.startMin) || (hour < props.endHour || min < props.endMin)) && week === props.weekHow ? 'Идет группа' : 'Не идет группа'}
            </div>
            <div className="time-line__long">Длительность: {props.long}</div>
            <div className="time-line__time">
                <span className="time-line__info">с {props.startHour}:{props.startMin < 10 ? `0${props.startMin}` : props.startMin}</span>
                <span className="time-line__info">до {props.endHour}:{props.endMin < 10 ? `0${props.endMin}` : props.endMin}</span>
            </div>
            {props.subInfo ? <img src={subInfo} className="time-line__subInfo" /> : ''}
        </div>
    )
}