import NavList from '../NavLists';
import './navigation.css';

import img1 from '../../assets/img/hero/img1.png'
import img2 from '../../assets/img/hero/img2.png'
import img3 from '../../assets/img/hero/img3.png'
import img4 from '../../assets/img/hero/img4.png'
import img5 from '../../assets/img/hero/img5.png'
import img6 from '../../assets/img/hero/img6.png'

const oneRow= [
	{title: 'РАСПИСАНИЕ СОБРАНИЙ', img: img1},
	{title: 'КОНТАКТЫ', img: img2},
	{title: 'О НАС', img: img3},

]

const twoRow = [
	{title: 'ОНЛАЙН ГРУППА', img: img4},
	{title: 'НАШИ ИСТОРИИ', img: img5},
	{title: 'КАК МНЕ ПРЕКРАТИТЬ УПОТРЕБЛЕНИЕ?', img: img6},
]

export default function Navigation(){
    return(
        <div className="nav">
			<NavList text={oneRow} />
			<NavList text={twoRow} />
        </div>
    )
}
