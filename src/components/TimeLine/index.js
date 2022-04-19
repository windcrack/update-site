import subInfo from '../../assets/img/sub-info.png';
import time from '../../assets/img/timeGreen.png';
import block from '../../assets/img/block.png';
import './timeLine.css';

export default function TimeLine(props){
    let data = new Date().toLocaleTimeString().slice(0,-3);
    // let hour = data.getHours();
    // let min = data.getMinutes();
    console.log(data);
    return(
        <div className="time-line__row">
            <div className="time-line__week">{props.week}</div>
            <div className="time-line__status">
                <img src={data >= props.start && data <= props.end ? time : block } className="time-line__img" alt="time"/>
                {data >= props.start && data <= props.end ? 'Идет группа' : 'Не идет группа'}
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