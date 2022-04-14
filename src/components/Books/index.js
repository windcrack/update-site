import "./books.css";
export default function Books(props){
    return(
        <div className="book-card">
            <img className="book-img" src={props.img} alt={props.title} />
            <div className="book-descr">
                <h2 className="book-title">{props.title}</h2>
                <div className="book-info">
                    <p className="book-sale">Цена: <span className="white">{props.sale} </span><b>&#8381;</b></p>
                    <p className="book-avail">Наличие: <span className="white">{props.avail ? 'Да' : 'Нет'}</span></p>
                    <p className="book-pages">Кол-во страниц: <span className="white">{props.pages}</span></p>
                    {props.origin !== "" ? <p className="book-origin">Оригинал: <a href={props.origin} className="white">Слушать</a></p> : ''}
                </div>
                <p className="book-text">
                    {props.desc}
                </p>
            </div>
        </div>
    );
}