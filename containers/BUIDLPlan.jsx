import { motion } from 'framer-motion';
import { Fragment, useRef } from 'react';
import { Divider, Quarter } from '../components';

const quarters = [
	{
		title: '',
		goals: [
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
				goal: 'Enabling Gasless market swap feature.',
			},
			{
				status: true,
				goal: 'Enabling Gasless limit trading feature.',
			},
			
			{
				status: false,
				goal: 'Certik audit release.',
			},
			{
				status: false,
				goal: 'Increase engineering guild.',
			},
			{
				status: false,
				goal: 'Gasless swaps on Optimism & Mainnet.',
			},
			
			
		],
	},
	{
		title: '',
		goals: [
			
			{
				status: true,
				goal: 'Launching the Kromatika protocol on Polygon network.',
			},
			{
				status: true,
				goal: 'Launching the Kromatika protocol on Arbitrum network.',
			},
			{
				status: false,
				goal: 'Fiat on/off ramp.',
			},
			
			{
				status: false,
				goal: 'UI redesign.',
			},
			
			
			{
				status: false,
				goal: 'Introduce FELOBox.',
			},
			{
				status: false,
				goal: 'Free gasless swaps on Optimism.',
			},
			{
				status: false,
				goal: 'Free gasless swaps on Arbitrum.',
			},
			
		],
	},
	{
		title: '',
		goals: [{
				status: false,
				goal: 'Integrate more aggregators to the MetaDex aggregator.',
			},
			{
				status: false,
				goal: 'Private transactions.',
			},{
				status: false,
				goal: 'Deploy Kromatika on Base.',
			},
			
			{
				status: false,
				goal: 'Referral Feature.',
			},
			{
				status: true,
				goal: 'Launch perpetual trading.',
			},
			{
				status: false,
				goal: 'All-in-One FELO.',
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
