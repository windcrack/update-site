import { Link } from "react-router-dom";
import './acide.css';
import login from '../../assets/img/login.png'
import book from '../../assets/img/book.png'
import radio from '../../assets/img/export.png'

export default function Acide(){
    return(
        <aside>
            <Link className="aside__link" to="/login">
                <img src={login} alt="Вход"/>
            </Link>
            <a className="aside__link" href="https://radio-na.ru/#listen" target="_blank" rel="noreferrer">
                <img src={radio} alt="Радио"/>
            </a>
            <a className="aside__link" href="https://na-russia.org/eg" target="_blank" rel="noreferrer">
                <img src={book} alt="Ежедневник"/>
            </a>
        </aside>
    )
}