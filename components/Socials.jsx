import Link from 'next/link';
import {
	FaDiscord,
	FaInstagram,
	FaTelegramPlane,
	FaTwitter,
} from 'react-icons/fa';

const socialItems = [
	{ href: 'https://discord.com/invite/5Yd7PrRx9y', icon: <FaDiscord /> },
	{ href: 'https://t.me/joinchat/09jBPxB1cl85OTBk', icon: <FaTelegramPlane /> },
	{ href: 'https://twitter.com/KromatikaFi', icon: <FaTwitter /> },
	{
		href: 'https://www.instagram.com/kromatika.finance/',
		icon: <FaInstagram />,
	},
];

const Socials = ({ isSlider }) => {
	return (
		<div className={`socials ${isSlider ? 'slider' : ''}`}>
			{socialItems.map(({ href, icon }, i) => (
				<Link href={href} key={i}>
					<a target='_blank' rel='noopener noreferrer'>
						{icon}
					</a>
				</Link>
			))}
		</div>
	);
};

export default Socials;
