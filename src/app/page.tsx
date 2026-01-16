import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Experience from '@/components/sections/Experience';
import TechStack from '@/components/sections/TechStack';
import Portfolio from '@/components/sections/Portfolio';
import Offer from '@/components/sections/Offer';
import Contact from '@/components/sections/Contact';
import Header from '@/components/layout/Header';
// import Footer from "@/components/layout/Footer";

const Home = () => (
	<div className="min-h-screen bg-background">
		<Header />
		<main>
			<Hero />
			<div id="about">
				<About />
			</div>
			<div id="experience">
				<Experience />
			</div>
			<TechStack />
			<div id="portfolio">
				<Portfolio />
			</div>
			<div id="offer">
				<Offer />
			</div>
			<Contact />
		</main>
		{/* <Footer /> */}
	</div>
);

export default Home;
