import { motion } from 'framer-motion';
import { Fragment, useRef } from 'react';
import { Divider, Quarter } from '../components';

const quarters = [
	{
		title: '',
		goals: [
			{
				status: true,
				goal: 'Launching the Kromatika protocol on Ethereum Mainnet, Arbitrum, Optimism, Polygon.',
			},
			{
				status: true,
				goal: 'Enabling Gasless limit trading feature.',
			},
			{
				status: true,
				goal: 'Kromatika DAO governance launch',
			},
			{
				status: true,
				goal: 'CEX listing.',
			},
			{
				status: true,
				goal: 'Launch perpetual trading.',
			},
			{
				status: true,
				goal: 'Launch free gasless swaps on Polygon.',
			},
			{
				status: false,
				goal: 'Deploy Kromatika v3 - improved UI and new features.',
			},
			{
				status: false,
				goal: 'Launch Free Gasless Swaps on Arbitrum.',
			},
			{
				status: false,
				goal: 'Make FELO uniV4 compliant.',
			},
		],
	},
	{
		title: '',
		goals: [
			{
				status: true,
				goal: 'Kromatika v2 (new features, modern UI, hybrid DEX).',
			},
			{
				status: true,
				goal: 'Create KROM/OP liquidity pool.',
			},
			{
				status: true,
				goal: 'Liquidity mining program for KROM/OP.',
			},
			{
				status: true,
				goal: 'Adding gasless market swap feature to Kromatika protocol.',
			},
			{
				status: false,
				goal: 'Launch referral program on Optimism.',
			},
			{
				status: false,
				goal: 'Gas refund program on Optimism.',
			},
			{
				status: false,
				goal: 'Increase number of Kromatika`s active contributors.',
			},
			{
				status: false,
				goal: 'Adopt Uniswap v4.',
			},
			{
				status: false,
				goal: 'Deploy FELO v2.',
			},
		],
	},	
	{
		title: '',
		goals: [
			{
				status: false,
				goal: 'Implement fiat on-ramp service.',
			},
			{
				status: false,
				goal: 'Implement cross-chain bridge aggregation solution.',
			},
			{
				status: true,
				goal: 'Certik gasless and MetaSwap router audit.',
			},
			{
				status: true,
				goal: 'Deploy Kromatika to Base.',
			},
			{
				status: false,
				goal: 'Deploy gasless to Mainnet, Optimism and Base.',
			},
			{
				status: false,
				goal: 'Integrate more swap aggregators.',
			},
			{
				status: false,
				goal: 'Integrate cross-chain swap aggregation solution.',
			},
			{
				status: true,
				goal: 'Deploy FELO to BASE.',
			},
			{
				status: true,
				goal: 'Deploy $KROM to BASE.',
			},
			{
				status: false,
				goal: 'AI ?',
			},
			{
				status: false,
				goal: 'Build new perpetual trading platform.',
			},
		],
	},
];

const BUIDLPlan = () => {
	return (
		<section id='section-roadmap' className='section-padding'>
			<motion.div
				initial={{ opacity: 0 }}
				whileInView={{ opacity: 1 }}
				transition={{ duration: 1 }}>
				<h2 className='section-title'>BUIDL Plan</h2>
			</motion.div>
			<p className={'buidl-plan'}>
				Kromatika DAO tasks are visible on Dework - the ultimate Web3 project management tool.
				All tasks can be undertaken by any web3 contributor, and incentivized in $KROM.
				You can find the Dework dashboard <a href='https://app.dework.xyz/kromatika-dao'> <strong>here</strong>.</a>
			</p>
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

export default BUIDLPlan;