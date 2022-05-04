import NewmemberText from "../components/NewmeberText";
import NewmemberFooter from "../components/NewmemberFooter";
import NewmemberNav from "../components/NewmemberNav";

export default function Newmember(){
    return(
        <div className="container">
            <h1 className="title title__main">Приветствуем тебя на официальном сайте сообщества «Анонимные Наркоманы» город Смоленск</h1>
            <NewmemberText />
            <NewmemberNav />
            <NewmemberFooter />
        </div>
    )
}