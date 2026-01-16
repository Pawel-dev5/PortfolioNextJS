import Hero from '@/components/homepage/Hero';
import About from '@/components/homepage/About';
import Experience from '@/components/homepage/Experience';
import TechStack from '@/components/homepage/TechStack';
import Portfolio from '@/components/homepage/Portfolio';
import Offer from '@/components/homepage/Offer';

const Home = () => (
	<>
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
	</>
);

export default Home;
