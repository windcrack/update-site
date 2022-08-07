import Contact from '../contacts'
import Logo from '../Logo'
import NavItems from '../NavItems'
import './header.css'

export default function Headers(){
    return(
        <header>
            <div className='container__header'>
                <Logo />
                <NavItems />
                <Contact />
            </div>
        </header>
    )
}