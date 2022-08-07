import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import DropDown from '../DropDown'
import './navItem.css'

const data = [
    {id: 1, title: 'Расписание', link: '/timetable'},
    {id: 2, title: 'Ежедневник', link: '/members'},
    {id: 3, title: 'Литература', link: '/literature'},
    {id: 4, title: 'Связаться с нами', link: '/members'},
]

export default function NavItems(){
    return(
        <ul className="navigation">
            <List />
        </ul>
    )
}

function List(){
    const [dropDown, setDropDown] = useState(false);

    function openMenu(){
        if(dropDown === false){
            setDropDown(true)
        }else{
			setDropDown(false)
		}

    }
    return(
        <>

            {data.map(elem => <li className='navigation__item' key={elem.id}><NavLink className="navigation__link" activeclassname="active" to={elem.link}>{elem.title}</NavLink></li>)}
            <li className='navigation__link drop-item' onClick={openMenu}>О нас</li>
            {dropDown ? <DropDown changer={openMenu} /> : null}
        </>
    )
}

