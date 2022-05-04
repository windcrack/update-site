import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import 'swiper/css';
import "swiper/css/pagination";
import "swiper/css/navigation";
import './preambulsBody.css';

export default function PreambulsGroup(props){
    return(
        <div className="preambuls-body">
            <Swiper
                slidesPerView={2}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Navigation, Pagination]}
            >
                {props.number.map((elem, idx) => <SwiperSlide key={idx}><img src={elem} alt="Картинка приамбулы" /></SwiperSlide>)}
            </Swiper>
        </div>
        
    )
}