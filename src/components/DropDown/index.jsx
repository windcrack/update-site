import { Link } from "react-router-dom";
import './dropdown.css'

export default function DropDown (props){
    return(
		<>
			<div className='click-outside' onClick={props.changer} />
			<ul className="dropDown-items" onClick={props.changer}>
				<li className="dropDown-item">
					<Link className="dropDown-link" activeclassname="active" to="/twelvestep">Программа 12 шагов</Link>
				</li>
				<li className="dropDown-item">
					<Link className="dropDown-link" activeclassname="active" to="/howcan">Кто может стать членом?</Link>
				</li>
				<li className="dropDown-item">
					<Link className="dropDown-link" activeclassname="active" to="/an-meeting">Что происходит на собраниях</Link>
				</li>
				<li className="dropDown-item">
					<Link className="dropDown-link" activeclassname="active" to="/open-meeting">Что такое открытое собрание</Link>
				</li>
			</ul>
		</>
    )
}
