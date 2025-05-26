import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { images } from '../constants/images';

const {
	metamaskLogo,
	arbitrumLogo,
	optimismLogo,
	polygonLogo,
	coinKromatika,
	coinsKromatika,
	circulatingSupply,
	coinsStash,
	goldLock,
} = images;

const Token = () => {
	// Cards data for token information
	const tokenCards = [
		{
			image: circulatingSupply,
			title: "Circulating Supply",
			content: (
				<>
					<p>
						Initially 60 million tokens were fair lauched on
						Uniswap V3 mainnet. 10 million were fair launched on Arbitrum and
						another 10 million on Optimism.
					</p>
					<p>
						A buyback from the DAO treasury was performed at the end of Q1 2022, for a total value
						of 2 million $KROM.
					</p>	
					<p>
						LP ownership token is burned, meaning $KROM is burned with every sell trade.
					</p>
				</>
			)
		},
		{
			image: coinsStash,
			title: "Vesting",
			content: (
				<p>
					12.000.000 $KROM have been locked on Unicrypt, or 12% of the
					total supply, with an average vesting of 2 years and 3 months.
					This vesting occurred in March 2022.
					Half of the vested tokens are allocated to the DAO treasury.
				</p>
			)
		},
		{
			image: goldLock,
			title: "Increased security",
			content: (
				<>
					<p>
						The proof of liquidity (position) was burnt, for better security
						and in order to prevent rug pull hacks. You can consult the
						transaction &nbsp;
						<Link href='https://etherscan.io/tx/0x26c782eb49c42979c259dda936f28b77ae8dbeef16da3ec341d06cb437034ac4'>
							<a target='_blank' rel='noopener noreferrer'>
								here.
							</a>
						</Link>
					</p>
					<p>
						7 million $KROM tokens are kept in the DAO treasury, managed by the Kromatika DAO.
					</p>
				</>
			)
		}
	];

	// Network guides data
	const networkGuides = [
		{
			logo: metamaskLogo,
			text: "How to buy $KROM using the Ethereum mainnet (via ",
			linkText: "Mainnet Ethereum",
			href: "https://1474401179-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FoxScRKy1rYzwfDKYX6RP%2Fuploads%2FXHJSQgGUDFPHD7VBeXho%2FKrom_guide_-_Mainnet.pdf?alt=media&token=23e4fb30-b570-46ff-b242-97f67506a50b",
			suffix: ")?"
		},
		{
			logo: optimismLogo,
			text: "How to add ",
			linkText: "Optimism",
			href: "https://1474401179-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FoxScRKy1rYzwfDKYX6RP%2Fuploads%2FM25inSyXdPgxhiccP2H7%2FKrom_guide_-_Optimism.pdf?alt=media&token=d871ef22-7715-4f5d-94e0-098b08651feb",
			suffix: " to & buy $KROM using metamask?"
		},
		{
			logo: arbitrumLogo,
			text: "How to add ",
			linkText: "Arbitrum",
			href: "https://1474401179-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FoxScRKy1rYzwfDKYX6RP%2Fuploads%2FfVZC2Pa4XlW9k3Doh1GJ%2FKrom_guide_-_Arbitrum.pdf?alt=media&token=3ab51ac2-0348-4c47-87e6-2298d7ee0249",
			suffix: " to & buy $KROM using metamask?"
		},
		{
			logo: polygonLogo,
			text: "How to add ",
			linkText: "Polygon",
			href: "https://1474401179-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2FoxScRKy1rYzwfDKYX6RP%2Fuploads%2FueqXnDg62spA7tRp0Yau%2FKrom_guide_-_Polygon.pdf?alt=media&token=1e538bcb-0ecb-48b0-8b1d-b45e23d12e20",
			suffix: " to & buy $KROM using metamask? (guide coming soon)"
		}
	];

	// Animation variants for reusability
	const fadeInVariants = {
		initial: { opacity: 0 },
		whileInView: { opacity: 1 },
		transition: { duration: 1 }
	};

	const slideInVariants = {
		initial: { x: -100 },
		whileInView: { x: 0 },
		transition: { duration: 1 }
	};

	const complexAnimationVariants = {
		initial: { x: -300 },
		whileInView: {
			x: 0,
			scale: [1, 2, 2, 1, 1],
			rotate: [0, 0, 150, 200, 0],
			borderRadius: ['20%', '20%', '50%', '50%', '20%'],
		},
		transition: { duration: 1 }
	};

	return (
		<section id='section-token' className='section-padding'>
			<motion.div {...fadeInVariants}>
				<h2 className='section-title'>Protocol Token</h2>
			</motion.div>

			<div className='token'>
				<motion.div {...slideInVariants} className='motion-div'>
					<figure className='token__figure'>
						<Image src={coinsKromatika} alt='Coins' className='token__img' />
					</figure>
				</motion.div>
				<div className='token__content'>
					<h3>What is $KROM?</h3>
					<p>
						$KROM is the utility and governance token of the Kromatika protocol. It is
						a non-mintable ERC20 token deployed on Ethereum with a fixed total
						supply of 100 million tokens. The tokenomic model of $KROM is
						deflationary by design since the tokens are being &nbsp;
						<Link href='https://app.uniswap.org/#/pool/154097?chain=mainnet'>
							<a target='_blank' rel='noopener noreferrer'>
								burnt.
							</a>
						</Link>
						<br />
						<br />
						$KROM is the token that pays the service fee to unlock the limit
						order feature of Kromatika protocol. This means that by using
						KROM tokens, you not only get access to cost efficient limit
						orders on the DEX, but you will also get LP fees on every trade
						thanks to the innovative approach to providing liquidity.
						<br />
						<br />
						$KROM token is also used as a governance token within the Kromatika DAO.
						<br />
						Kromatika DAO has the possibility to add more utilities for the KROM token through 
						governance proposals.
					</p>
				</div>
			</div>

			{/* CARDS UNDER TOKEN SECTION */}
			<div className='cards-wrapper'>
				{tokenCards.map((card, index) => (
					<motion.div key={index} {...fadeInVariants} className='card'>
						<figure>
							<Image src={card.image} alt='' />
						</figure>
						<div className='card__overlay'>
							<span className='card__title'>{card.title}</span>
							<span className='card__content'>
								{card.content}
							</span>
						</div>
					</motion.div>
				))}
			</div>

			{/* HOW TO BUY UNDER TOKEN SECTION */}
			<div className='token'>
				<motion.div {...complexAnimationVariants} className='motion-div'>
					<figure className='token__figure'>
						<Image src={coinKromatika} alt='Coins' className='token__img' />
					</figure>
				</motion.div>
				<div className='token__content'>
					<h3>How to buy $KROM?</h3>
					<p>
						The easiest way to purchase $KROM, is by using Kromatika Swap
						Aggregator: &nbsp;
						<Link href='https://app.kromatika.finance/#/swap?inputCurrency=ETH&outputCurrency=0x3af33bef05c2dcb3c7288b77fe1c8d2aeba4d789'>
							<a target='_blank' rel='noopener noreferrer'>
								launch the dapp
							</a>
						</Link>
						&nbsp; and connect your wallet. No $KROM is required to use the swap
						aggregator. The swap aggregator is working on Ethereum mainnet,
						Optimism, Arbitrum and Polygon.
					</p>
					<p>
						You can consult more detailed instructions using the below links:
					</p>
					<ul>
						{networkGuides.map((guide, index) => (
							<li key={index}>
								<figure>
									<Image
										src={guide.logo}
										alt=''
										layout='fixed'
										width='28px'
										height='28px'
									/>
								</figure>
								<p>
									{guide.text}
									<Link href={guide.href}>
										<a target='_blank' rel='noopener noreferrer'>
											{guide.linkText}
										</a>
									</Link>
									{guide.suffix}
								</p>
							</li>
						))}
					</ul>
					<Link
						passHref={true}
						href='https://app.kromatika.finance/#/swap?inputCurrency=ETH&outputCurrency=0x3af33bef05c2dcb3c7288b77fe1c8d2aeba4d789'>
						<motion.a
							className='btn btn-solid'
							target='_blank'
							rel='noopener noreferrer'
							whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
							whileTap={{ scale: 0.9 }}>
							Buy $KROM
						</motion.a>
					</Link>
				</div>
			</div>
		</section>
	);
};

export default Token;