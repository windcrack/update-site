import './mapBlock.css'

export default function MapBlock(props){
    return(
        <div className="map-frame">
            <iframe src={props.mapSrc}></iframe>
            <button className="btn">
                <span className="btn__text">Расположение на фото</span>
            </button>
        </div>
    
    )
}