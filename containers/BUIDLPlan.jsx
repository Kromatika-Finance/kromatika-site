import { motion } from 'framer-motion';
import { Fragment, useRef } from 'react';
import { Divider, Quarter } from '../components';

const quarters = [
	{
		title: '',
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
			{
				status: true,
				goal: 'Launching new kromatika.finance website.',
			},
		],
	},
	{
		title: '',
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
				status: true,
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
		title: '',
		goals: [
			{
				status: true,
				goal: 'Kromatika DAO governance launch',
			},
			{
				status: false,
				goal: 'Create KROM/OP liquidity pool.',
			},
			{
				status: false,
				goal: 'Liquidity mining program for KROM/OP.',
			},
			{
				status: true,
				goal: 'Launch perpetual trading.',
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
				goal: 'Implement fiat on-ramp service.',
			},
			{
				status: false,
				goal: 'Implement cross-chain bridge solution.',
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
