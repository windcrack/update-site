import Hero from "../components/Hero";
import Slider from "../components/Slider";

export default function Main(){
    return(
        <section className="container">
            <h1 className="title title__main">Официальный сайт Смоленского сообщества Анонимные наркоманы(АН).</h1>
            <Slider />
            <Hero />
        </section>
    )
}