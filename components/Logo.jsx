import Image from 'next/image';
import Link from 'next/link';
import { images } from '../constants/images';

const { logo } = images;

const Logo = ({ path }) => {
	return (
		<Link href={path}>
			<div className='logo'>
				<figure className='logo__img'>
					<Image src={logo} alt='' />
				</figure>
				<div className='logo__text'>
					<span>Kromatika</span>
					<span>Finance</span>
				</div>
			</div>
		</Link>
	);
};

export default Logo;
