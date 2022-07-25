const FloatingBar = ({ Icon, text, position }) => {
	const { top, right, bottom, left } = position;

	return (
		<div
			className='floating-bar'
			style={{
				position: 'absolute',
				top: top,
				right: right,
				bottom: bottom,
				left: left,
			}}>
			<Icon className='floating-bar__icon' />
			<span className='floating-bar__text'>{text}</span>
		</div>
	);
};

export default FloatingBar;
