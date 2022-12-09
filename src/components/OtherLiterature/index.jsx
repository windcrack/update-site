import './other.css';
export default function OtherLiterature(props){
    return(
        <>
            <div className="other-card">
                <img src={props.img} className="other-img" alt={props.title} />
                <div className="other-descr">
                    <p className="other-avail">Наличие: {props.avail ? 'Да':'Нет'}</p>
                </div>
				<div className="block-price">
					<div className="block-price__info">{props.sale}<b> &#8381;</b></div>
				</div>
            </div>
        </>
    )
}
