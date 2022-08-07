import logo from '../../assets/img/logo-new.svg';
import './logo.css';

export default function Logo(){
    return(
        <a className='logo' href='/'>
            <img src={logo} alt="Лого" className='logo__img'/>
            <span className="logo__text">Смоленск</span>
        </a>
    )
}
