import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Scrollbar } from 'swiper';
import slide1 from '../../assets/img/slider1.png';

import './slider.css';
import 'swiper/css';
import "swiper/css/navigation";
import "swiper/css/scrollbar";

export default function Slider(){
    return(
        <div className="slider">
            <Swiper
                pagination={true}
                navigation={true}
                scrollbar={{
                    hide: true,
                }}
                modules={[Navigation, Scrollbar]}
                className="slider__block"
            >
                <SwiperSlide><img src={slide1} alt="Slider 1" /></SwiperSlide>
                <SwiperSlide>Slide 2</SwiperSlide>
                <SwiperSlide>Slide 3</SwiperSlide>
                <SwiperSlide>Slide 4</SwiperSlide>
                <SwiperSlide>Slide 5</SwiperSlide>
            </Swiper>
        </div>
    )
}