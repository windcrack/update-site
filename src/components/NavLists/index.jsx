import { Link } from 'react-router-dom';
import './navlists.css';


export default function NavList ({text, link}){
	return(
		<>
			<ul className="nav__items">
				{text.map(item => <li className="nav__item">
					<div className="nav__shadow"></div>
					<img src={item.img} alt="" className="nav__img" />
					<Link to={item.link} className="nav__title">{item.title}</Link>
				</li>)}
			</ul>
		</>
	);
}
