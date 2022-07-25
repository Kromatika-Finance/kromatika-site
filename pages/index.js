import { Blur, Navbar, Seo, Socials } from '../components';
import {
	Brands,
	Eclipses,
	FAQ,
	Footer,
	Hero,
	HowItWorks,
	Qualities,
	Roadmap,
	Token,
} from '../containers';

export default function Home() {
	return (
		<div className='layout-container'>
			<Seo />
			<Eclipses />
			<Navbar />
			<Blur>
				<Hero />
				<Qualities />
				<Token />
				<Roadmap />
				<HowItWorks />
				<FAQ />
				<Brands />
			</Blur>
			<Footer />
			<Socials isSlider={true} />
		</div>
	);
}
