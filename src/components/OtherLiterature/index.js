import './other.css';
export default function OtherLiterature(props){
    return(
        <>
            <div className="other-card">
                <img src={props.img} className="other-img" alt={props.title} />
                <div className="other-descr">
                    <h3 className="other-descr__title">{props.title}</h3>
                    <p className="other-sale">Цена: <span className="white">{props.sale}</span> &#8381;</p>
                    <p className="other-avail">Наличие: <span className="white">{props.avail ? 'Да':'Нет'}</span></p>
                </div>
            </div>
        </>
    )
}