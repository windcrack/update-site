import Modal from "../Modal";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Scrollbar } from 'swiper';
import { useState } from "react";

import './mapBlock.css';

export default function MapBlock(props){
	const [changeActive, setChangeAcive] = useState(false)
	function openModalPlacePhoto(){
		setChangeAcive(true)
	}
    return(
        <>
            <div className="map-frame">
                <iframe src={props.mapSrc} title="Карта группы"></iframe>
                <button className="btn" onClick={openModalPlacePhoto}>
                    {props.photo.length > 0 ? <span className="btn__text">Расположение на фото</span> : <span className="btn__text">Расположение на фото будет позже</span> }
                </button>
            </div>
			{props.photo.length > 0 ? <Modal active={changeActive} setActive={setChangeAcive}>
				<Swiper
					pagination={true}
					navigation={true}
					scrollbar={{
						hide: true,
					}}
					modules={[Navigation, Scrollbar]}
				>
					{props.photo.map((item, idx) =><SwiperSlide key={idx}><img className="map-frame__img" src={item} alt="Картинка" /></SwiperSlide>)}
				</Swiper>
			</Modal> : null}
        </>
    )
}
