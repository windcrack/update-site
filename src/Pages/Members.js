import MemberDescr from "../components/MemberDescr";
import TabsMember from "../components/Tabs";

export default function Members(){
    return(
        <section className="container">
            <h1 className="title title__main">Приветствуем тебя в нашем сообществе</h1>
            <MemberDescr />
            <TabsMember />       
        </section>
    )
}