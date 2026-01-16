import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Experience from '@/components/sections/Experience';
import TechStack from '@/components/sections/TechStack';
import Portfolio from '@/components/sections/Portfolio';
import Offer from '@/components/sections/Offer';

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
