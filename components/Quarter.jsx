import {
	RiCheckboxBlankCircleFill,
	RiCheckboxCircleFill,
} from 'react-icons/ri';
import { StatusBar } from '.';
import { motion } from 'framer-motion';

const list = {
	visible: {
		opacity: 1,
		transition: {
			when: 'beforeChildren',
			staggerChildren: 0.5,
		},
	},
	hidden: {
		opacity: 0,
		transition: {
			when: 'afterChildren',
		},
	},
};

const itemFramer = {
	visible: { opacity: 1 },
	hidden: { opacity: 0 },
};

const Quarter = ({ quarter }) => {
	const { title, goals } = quarter;
	const goalsCompletedCount = goals.filter(goal => goal.status === true);
	const progress = (100 / goals.length) * goalsCompletedCount.length;

	return (
		<div className='quarter'>
			<StatusBar progress={progress} />
			<h3 className='quarter__title'>{title}</h3>
			<motion.ul
				initial='hidden'
				animate='visible'
				variants={list}
				className='quarter__list'>
				{goals.map((item, i) => (
					<motion.li variants={itemFramer} className='quarter__item' key={i}>
						<span>
							{item.status ? (
								<RiCheckboxCircleFill className='goal-done' />
							) : (
								<RiCheckboxBlankCircleFill className='goal-pending' />
							)}
						</span>
						<p>{item.goal}</p>
					</motion.li>
				))}
			</motion.ul>
		</div>
	);
};

export default Quarter;
