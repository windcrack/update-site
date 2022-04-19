import './mapBlock.css';
import Preloader from './Preloader';

export default function MapBlock(props){
    return(
        <>
            <Preloader map={props.mapSrc} />
            <div className="map-frame">
                
                <button className="btn">
                    <span className="btn__text">Расположение на фото</span>
                </button>
            </div>
        </>
    )
}