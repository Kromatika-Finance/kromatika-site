import Image from 'next/image';
import Link from 'next/link';

const Tile = ({ href, logo }) => {
	return (
		<Link href={href}>
			<a className='tile' target='_blank' rel='noopener noreferrer'>
				<Image src={logo} alt='' />
			</a>
		</Link>
	);
};

export default Tile;
