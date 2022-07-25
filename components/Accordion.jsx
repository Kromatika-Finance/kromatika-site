import { HiChevronRight } from 'react-icons/hi';

const Accordion = ({ label, content, id }) => {
	return (
		<article className={`accordion`}>
			<input
				type='checkbox'
				id={`toggle-${id}`}
				className='accordion__toggle'
			/>
			<label htmlFor={`toggle-${id}`} className='accordion__label'>
				<span>{label}</span>
				<HiChevronRight className='accordion__chevron' />
			</label>
			<div className='accordion__content'>
				{Object.prototype.toString.call(content) === '[object Array]' ? (
					content.map((item, i) => <p key={i}>{item}</p>)
				) : (
					<p>{content}</p>
				)}
			</div>
		</article>
	);
};

export default Accordion;
