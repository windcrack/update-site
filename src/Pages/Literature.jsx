import Books from "../components/Books";
import OtherLiterature from "../components/OtherLiterature";
import buclet from "../assets/img/white1.png";
import ip from "../assets/img/ip1.png";
import bookt from '../assets/img/book1.png';


const books = [
    {
        img: bookt,
        title: "Анонимые наркоманы Базовый текст (6-е издание)",
        sale: 500,
        avail: true,
        pages: 100,
        origin: "http://m.na.org/?ID=bt-aud",
        desc: "Первая книга АН была опубликована в 1983 году, а в 2009 году она была пересмотрена, чтобы включить новые личные истории в шестое издание. «Наша программа» состоит из десяти глав, в которых объясняется Содружество АН и наша программа выздоровления. «Рассказ наших членов» включает в себя личные истории членов АН со всего мира. Есть возможность прослушать бащовый текст по ссылке."
    },
    {
        img: bookt,
        title: "Только сегодня",
        sale: 310,
        avail: true,
        pages: 100,
        origin: "",
        desc: "Впервые опубликованная в августе 1992 года, книга «Только сегодня» предлагает тебе один из принципов выздоровления на каждый день года — тему, цитату из литературы АН, размышления на эту тему, а также заключительное утверждение для медитации. Включает в себя предметный указатель."
    },
    {
        img: bookt,
        title: "Руководство к работе по шагам в АН",
        sale: 350,
        avail: true,
        pages: 194,
        origin: "",
        desc: "Эверсия учебного пособия АН «Двенадцать шагов». В нем содержится полезный справочный раздел, в котором обсуждаются принципы, относящиеся к каждому из наших Двенадцати Шагов, а также некоторые практические вопросы для анализа, касающиеся понимания каждым из этих шагов."
    },
    {
        img: bookt,
        title: "Это работает как и почему",
        sale: 130,
        avail: true,
        pages: 153,
        origin: "",
        desc: "Причины, по которым наша программа работает, как и почему происходит выздоровление, кроются в коллективной мудрости наших членов, представленных здесь в 24 эссе о Шагах и Традициях АН. Члену: Эта книга представляет собой обсуждение Двенадцати Шагов и Традиций АН, призванное помочь вам определить вашу собственную интерпретацию содержащихся в них принципов. Мы надеемся, что «эта книга действительно представляет терапевтическую ценность помощи одного зависимого другому»."
    },
    {
        img: bookt,
        title: "Спонсорство",
        sale: 480,
        avail: true,
        pages: 244,
        origin: "",
        desc: "Эта книга о спонсорстве в АН, проиллюстрированная личным опытом членов, отмечает богатство различий и разнообразный опыт всемирного Содружества Анонимных Наркоманов."
    },
    {
        img: bookt,
        title: "Жить чистым",
        sale: 230,
        avail: true,
        pages: 223,
        origin: "",
        desc: "Послание АН состоит из трех частей: любой наркоман может перестать употреблять, потерять желание употреблять и найти новый образ жизни. Эта книга посвящена поиску нового образа жизни - практике выздоровления в нашей повседневной жизни, в наших отношениях и в нашем служении другим. Он предназначен для того, чтобы приветствовать новых членов АН и пробудить энтузиазм в тех, кто долгое время работал в АН. "
    },
]

const otherLiterature = [
    {
        name: "Буклеты",
        info: [
            {img: buclet, title: "Белый буклет", sale: "12", avail: true},
            {img: buclet, title: "Белый", sale: "35", avail: true},
            {img: buclet, title: "Белый еще который добавили", sale: "42", avail: true},
            {img: buclet, title: "Белый Возможно", sale: "15", avail: true},
            {img: buclet, title: "Если буклет", sale: "88", avail: true},
        ]
    },
    {
        name: "Информационные проспекты(ИП)",
        info: [
            {img: ip, title: "Кто, что, как и почему", sale: "10", avail: true},
            {img: ip, title: "Группа", sale: "5", avail: true},
            {img: ip, title: "Другой взгляд", sale: "3", avail: true},
            {img: ip, title: "Выздоровление и срыв", sale: "8", avail: true},
            {img: ip, title: "Зависимый ли я?", sale: "5", avail: true},
            {img: ip, title: "Только сегодня", sale: "3", avail: true},
            {img: ip, title: "Жить программой", sale: "12", avail: true},
        ]
    }
]

export default function Literature(){
    return(
        <section className="container">
            <h1 className="title title__main">Литература сообщества АН</h1>
            <div className="book-body">
                <h2 className="title__sub">Книги</h2>
                {books.map((item, idx) =>
                    <Books
                        key={idx}
                        img={item.img}
                        title={item.title}
                        sale={item.sale}
                        avail={item.avail}
                        pages={item.pages}
                        origin={item.origin}
                        desc={item.desc}
                    />
                )}
            </div>
            {otherLiterature.map((elem, index) =>
                <div className="book-body" key={index}>
                    <h2 className="title__sub">{elem.name}</h2>
                    {elem.info.map((item, idx) => <OtherLiterature
                        key={idx}
                        img={item.img}
                        title={item.title}
                        sale={item.sale}
                        avail={item.avail}
                    />)}
                </div>
            )}
        </section>
    );
}
