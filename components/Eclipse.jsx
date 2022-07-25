import { motion } from 'framer-motion';
import Image from 'next/image';

const Eclipse = ({ eclipse, ...props }) => {
	return (
		<motion.figure className='eclipse' {...props}>
			<Image src={eclipse} alt='' />
		</motion.figure>
	);
};

export default Eclipse;
