import { Link } from "react-router-dom";
import './NewmemberNav.css';
export default function NewmemberNav(){
    return(
        <div className="newMemberNav-body">
            <h2 className="title__sub">Коротко о нас</h2>
            <ul className="newMemberNav-items">
                <li className="newMemberNav-item">
                    <Link className="newMemberNav-link white" to="">
                        Анонимные Наркоманы — это бесплатное анонимное сообщество, которое поможет тебе отказаться от наркотиков и научиться жить без них.
                    </Link>
                </li>
                <li className="newMemberNav-item">
                    <Link className="newMemberNav-link white" to="">
                        Собрания проходят по всему миру круглосуточно. Не нужно никаких документов, можно назваться своим или вымышленным именем, прийти и уйти в любой момент.
                    </Link>
                </li>
                <li className="newMemberNav-item">
                    <Link className="newMemberNav-link white" to="">
                        Все, что нужно, чтобы стать членом Анонимных Наркоманов — желание бросить употреблять наркотики.
                    </Link>
                </li>
                <li className="newMemberNav-item">
                    <Link className="newMemberNav-link white" to="">
                        Тебя никто не осудит, если на первые собрания ты придёшь, ещё употребляя наркотики. Многие из нас начинали именно так.
                    </Link>
                </li>
                <li className="newMemberNav-item">
                    <Link className="newMemberNav-link white" to="">
                        Не важно, какие именно наркотики ты предпочитаешь. Анонимные Наркоманы помогают отказаться от любых веществ, изменяющих сознание.
                    </Link>
                </li>
                <li className="newMemberNav-item">
                    <Link className="newMemberNav-link white" to="">
                        Анонимные Наркоманы не имеют отношения к религии, политике, медицине.
                    </Link>
                </li>
                <li className="newMemberNav-item">
                    <Link className="newMemberNav-link white" to="">
                        В нашем сообществе нет никаких взносов или других платежей «за участие».
                    </Link>
                </li>
                <li className="newMemberNav-item">
                    <Link className="newMemberNav-link white" to="">
                        Для нас очень важно сохранять анонимность, поэтому мы просим не разглашать услышанную на собраниях информацию.
                    </Link>
                </li>
                <li className="newMemberNav-item">
                    <Link className="newMemberNav-link white" to="">
                        Группы Анонимных Наркоманов и программа 12 Шагов помогли многим зависимым. Возможно, помогут и тебе. Попробуй!
                    </Link>
                </li>
            </ul>
        </div>
    )
}