import { motion } from 'framer-motion';
import { useRef } from 'react';
import { Tile } from '../components';
import { brands } from '../constants/brands';

const {
	cg2,
	uniswap,
	polygon,
	optimismHorizontal,
	chainlink,
	celer,
	arbitrum,
	dexguru,
	dextlogo,
	ethereum,
	vulkania,
} = brands;

const seenOn = [
	{ href: 'https://www.coingecko.com/en/coins/kromatika', logo: cg2 },
	{
		href: 'https://dex.guru/token/0x3af33bef05c2dcb3c7288b77fe1c8d2aeba4d789-eth',
		logo: dexguru,
	},
	{
		href: 'https://www.dextools.io/app/ether/pair-explorer/0x6ae0cdc5d2b89a8dcb99ad6b3435b3e7f7290077',
		logo: dextlogo,
	},
	{ href: 'https://vulkania.io/coins/kromatika', logo: vulkania },
];

const buildOn = [
	{ href: 'https://arbitrum.io/', logo: arbitrum },
	{ href: 'https://www.optimism.io/', logo: optimismHorizontal },
	{ href: 'https://ethereum.org/en/', logo: ethereum },
	{ href: 'https://polygon.technology/', logo: polygon },
];

const poweredBy = [
	{ href: 'https://chain.link/', logo: chainlink },
	{ href: 'https://uniswap.org/', logo: uniswap },
];

const bridgePartnership = [{ href: 'https://www.celer.network/', logo: celer }];

const Brands = () => {
	return (
		<section id='section-brands' className='section-padding'>
			{/* SEEN ON */}
			<div className='brands'>
				<motion.div
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					transition={{ duration: 1 }}>
					<h2 className='brands__title'>As Seen On</h2>
				</motion.div>
				<div className='brands__links'>
					{seenOn.map(({ href, logo }, index) => (
						<Tile href={href} logo={logo} key={index} />
					))}
				</div>
			</div>
			{/* BUILT ON*/}
			<div className='brands'>
				<motion.div
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					transition={{ duration: 1 }}>
					<h2 className='brands__title'>Built On</h2>
				</motion.div>
				<div className='brands__links'>
					{buildOn.map(({ href, logo }, index) => (
						<Tile href={href} logo={logo} key={index} />
					))}
				</div>
			</div>
			<div className='brands-wrapper'>
				{/* POWERED BY */}
				<div className='brands'>
					<motion.div
						initial={{ opacity: 0 }}
						whileInView={{ opacity: 1 }}
						transition={{ duration: 1 }}>
						<h2 className='brands__title'>Powered By</h2>
					</motion.div>
					<div className='brands__links'>
						{poweredBy.map(({ href, logo }, index) => (
							<Tile href={href} logo={logo} key={index} />
						))}
					</div>
				</div>
				{/* BRIDGE PARTNERSHIP */}
				<div className='brands'>
					<motion.div
						initial={{ opacity: 0 }}
						whileInView={{ opacity: 1 }}
						transition={{ duration: 1 }}>
						<h2 className='brands__title'>Official Bridge Partner</h2>
					</motion.div>
					<div className='brands__links'>
						{bridgePartnership.map(({ href, logo }, index) => (
							<Tile href={href} logo={logo} key={index} />
						))}
					</div>
				</div>
			</div>
		</section>
	);
};

export default Brands;
