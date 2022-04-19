import subInfo from '../../assets/img/sub-info.png';
import time from '../../assets/img/timeGreen.png';
import block from '../../assets/img/block.png';
import './timeLine.css';

export default function TimeLine(props){
    
    let timeHour = new Date().toLocaleTimeString().slice(0,-3);
    let weekHow = new Date().getDay();
    const daysWeek = ['Воскресенье', "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];

    return(
        <div className="time-line__row">
            <div className="time-line__week">{props.week}</div>
            <div className="time-line__status">
                <img src={
                    timeHour >= props.start && timeHour <= props.end && (daysWeek[weekHow] === props.week || "Каждый день" === props.week)  ? time : block 
                } 
                className="time-line__img" 
                alt="time"
                />
                {timeHour >= props.start && timeHour <= props.end && (daysWeek[weekHow] === props.week || "Каждый день" === props.week) ? 'Идет группа' : 'Не идет группа'}
            </div>
            <div className="time-line__long">Длительность: {props.long}</div>
            <div className="time-line__time">
                <span className="time-line__info">с {props.start}</span>
                <span className="time-line__info">до {props.end}</span>
            </div>
            {props.subInfo ? <img src={subInfo} className="time-line__subInfo" /> : ''}
            
        </div>
    )
}