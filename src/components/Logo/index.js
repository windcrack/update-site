import logo from '../../assets/img/logo.svg';
import './logo.css';

export default function Logo(){
    return(
        <a className='logo' href='/'>
            <img src={logo} alt="Лого" className='logo__img'/>
            <span className="logo__text">Анонимные наркоманы город Смоленск</span>
        </a>
    )
}