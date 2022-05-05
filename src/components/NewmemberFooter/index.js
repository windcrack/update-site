import { Link } from "react-router-dom";
import './newmemFooter.css';

export default function NewmemberFooter(){
    return(
        <>
            <ul className="newmember-footer__lists">
                <li className="newmember-footer__list">
                    <Link className="newmember-footer__link" to="/howcan">Кто може стать челоном сообщества?</Link>
                </li>
                <li className="newmember-footer__list">
                    <Link className="newmember-footer__link" to="/an-meeting">Что происходит на собрании?</Link>
                </li>
                <li className="newmember-footer__list">
                    <Link className="newmember-footer__link" to="/twelvestep">Программа 12 шагов</Link>
                </li>
            </ul>
            <Link to="/timetable">
                <button className="newmember-footer__button">Расписание групп</button>
            </Link>
        </>
    )
}