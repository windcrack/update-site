import { Link } from 'react-router-dom';
import './hero.css';

export default function Hero(){
    return(
        <section className="hero">
            <h1 className="hero__title">Приветствуем тебя на официальном сайте сообщества «Анонимные Наркоманы» город Смоленск!</h1>
			<ol className="hero__items">
				<li className="hero__item"><span className='hero__item-nubmer'>1</span><p className='hero__item-text'>Ничто не может заменить живое общение и поэтому, чтобы быстрее понять, кто мы и как можем тебе помочь — <Link className='hero__item-link' to="/timetable">мы приглашаем прямо сегодня посетить одну из встреч участников сообщества АН</Link>, которые проходят в городе Смоленска.<br /><br /> Если у тебя нет физической возможности - посети нашу <Link className='hero__item-link' to="/timetable">онлайн группу</Link>.</p></li>
				<li className="hero__item"><p className='hero__item-text'><Link className='hero__item-link' to="/timetable">Найди Спонсора в нашем списке.</Link> Так же у нас есть список доступных служений как онлайн так и на живых группах.</p><span className='hero__item-nubmer'>2</span></li>
				<li className="hero__item"><span className='hero__item-nubmer'>3</span><p className='hero__item-text'>Приобрети <Link className='hero__item-link' to="/literature">литературу</Link> и вместе со Спонсорам шагай к новой жизни без наркотиков!</p></li>
			</ol>
        </section>
    )
}
