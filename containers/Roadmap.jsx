import { motion } from 'framer-motion';
import { Fragment, useRef } from 'react';
import { Divider, Quarter } from '../components';

const quarters = [
	{
		title: 'Q1 2022',
		goals: [
			{
				status: true,
				goal: 'Launching the Kromatika protocol on Ethereum Mainnet (audit completion).',
			},
			{
				status: true,
				goal: 'Enabling Gasless limit trading feature.',
			},
			{
				status: true,
				goal: 'Liquidity farming rewards for KROM liquidity providers on Celer bridge.',
			},
			{
				status: true,
				goal: 'Launching the KROM token on Uniswap Polygon.',
			},
			{
				status: true,
				goal: 'Launching the Kromatika protocol on Arbitrum Layer2 network.',
			},
		],
	},
	{
		title: 'Q2 2022',
		goals: [
			{
				status: true,
				goal: 'Launching the Kromatika protocol on the Polygon network.',
			},
			{
				status: false,
				goal: 'Liquidity farming rewards for Krom liquidity providers on Uniswap on all networks.',
			},
			{
				status: false,
				goal: 'Adding gasless market swap feature to Kromatika protocol.',
			},
			{
				status: true,
				goal: 'CEX listing.',
			},
			{
				status: false,
				goal: 'Launching KROM-E.',
			},
			{
				status: true,
				goal: 'Kromatika v2 (new features, modern UI, hybrid DEX).',
			},
		],
	},
	{
		title: 'Q3 2022',
		goals: [
			{
				status: false,
				goal: 'Native KROM staking / yield farming.',
			},
			{
				status: false,
				goal: 'Launching of a governance token.',
			},
			{
				status: false,
				goal: 'Distribution of governance token to Kromatika protocol users.',
			},
			{
				status: false,
				goal: 'DAO',
			},
		],
	},
];

const Roadmap = () => {
	return (
		<section id='section-roadmap' className='section-padding'>
			<motion.div
				initial={{ opacity: 0 }}
				whileInView={{ opacity: 1 }}
				transition={{ duration: 1 }}>
				<h2 className='section-title'>Roadmap</h2>
			</motion.div>
			<div className='roadmap container'>
				{quarters.map((quarter, i) => (
					<Fragment key={i}>
						<Quarter quarter={quarter} />
						<span className='checkpoint' />
					</Fragment>
				))}
				<Divider type='vertical' h='58rem' w='0' />
			</div>
		</section>
	);
};

export default Roadmap;
