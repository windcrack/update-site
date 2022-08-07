import Hero from "../components/Hero";
import Navigation from "../components/Navigation";

export default function Main(){
    return(
		<>
			<Navigation />
			<section className="container">
				<Hero />
			</section>
		</>
    )
}
