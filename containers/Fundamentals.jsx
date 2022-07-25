import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import React, { useRef } from 'react';
import { images } from '../constants/images';

const {
	Scene_BluePurpleGold_Farming,
	Scene_BluePurpleGold_Trading,
	Scene_BluePurpleGold_NoLimits,
} = images;

const Fundamentals = () => {
	return (
		<section id='section-fundamentals' className='section-padding'>
			<motion.div
				initial={{ opacity: 0 }}
				whileInView={{ opacity: 1 }}
				transition={{ duration: 1 }}>
				<h2 className='section-title'>More On Our Fundamentals</h2>
			</motion.div>
			<div className='cards-wrapper'>
				<div className='card'>
					<figure>
						<Image src={Scene_BluePurpleGold_Farming} alt='' />
					</figure>
					<div className='card__body'>
						<span className='card__title'>Learn about our protocol</span>
						<span className='card__content'>
							<p>
								Explore our docs and discover just how Kromatika works behind
								the scenes. You will understand how we can get you those juicy
								deals without slippage, fees or bots! Are you digging for the
								real deal? Dive into github and check out our open-source code.
							</p>
						</span>
						<Link href='https://docs.kromatika.finance/'>
							<a
								className='btn btn-solid btn-block'
								target='_blank'
								rel='noopener noreferrer'>
								Let’s go
							</a>
						</Link>
					</div>
				</div>

				<div className='card'>
					<figure>
						<Image src={Scene_BluePurpleGold_Trading} alt='' />
					</figure>
					<div className='card__body'>
						<span className='card__title'>Discover the Dapp</span>
						<span className='card__content'>
							<p>
								Did you know we have a limit order book and a swap aggregator?
								Are you curious to see just how beneficial it all is?
								Launch the dapp and start trading right now!
							</p>
						</span>
						<Link href='https://app.kromatika.finance/#/limitorder'>
							<a
								className='btn btn-solid btn-block'
								target='_blank'
								rel='noopener noreferrer'>
								Let’s go
							</a>
						</Link>
					</div>
				</div>

				<div className='card'>
					<figure>
						<Image src={Scene_BluePurpleGold_NoLimits} alt='' />
					</figure>
					<div className='card__body'>
						<span className='card__title'>Explore our Krom-E’s</span>
						<span className='card__content'>
							<p>
								Apart from the awesome protocol we got running, we also got a
								wonderful NFT collection that is coming around the corner. Our
								Krom-E’s will provide even more benefits to the protocol users
								and of course have a stunning design. Utility and art, perfectly
								blended.
							</p>
						</span>
						<div className='btn btn-solid btn-block isDisabled'>
							Coming soon
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Fundamentals;
