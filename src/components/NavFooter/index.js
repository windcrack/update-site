import { Link } from "react-router-dom"
import './navFooter.css';

const items1 =[
    {title: 'Расписание', link: '/timetable'},
    {title: 'Участнику', link: '/literature'},
    {title: 'Литература', link: '/members'},
]

const items2 =[
    {title: 'Ежедневник', link: '/diary'},
    {title: 'Новичку', link: '/newmember'},
    {title: 'Кно может стать членом', link: '/howcan'},
]


const items3 =[
    {title: 'Программа 12 шагов', link: '/twelvestep'},
    {title: 'Что происходит на собрании', link: '/an-meeting'},
    {title: 'Что такое открытое собрание', link: '/open-meeting'},
]

export default function NavFooter(){
    return(
        <div className="footer__nav">
            <ul className="footer__items">
                <FirstLink item={items1} />
            </ul>
            <ul className="footer__items">
                <FirstLink item={items2} />
            </ul>
            <ul className="footer__items">
                <FirstLink item={items3} />
            </ul>
        </div>
    )
}

function FirstLink(props){
    return(
        <>
            {props.item.map((elem, index) => <li className="footer__item" key={index}><Link className="footer__link" to={elem.link}>{elem.title}</Link></li>)}
        </>
    )
}