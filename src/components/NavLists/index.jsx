import './navlists.css';


export default function NavList (props){
	return(
		<>
			<ul className="nav__items">
				{props.text.map(item => <li className="nav__item">
					<div className="nav__shadow"></div>
					<img src={item.img} alt="" className="nav__img" />
					<h2 className="nav__title">{item.title}</h2>
				</li>)}
			</ul>
		</>
	);
}
