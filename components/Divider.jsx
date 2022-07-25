const Divider = ({ type, h, w, color }) => {
	return (
		<div
			className={`divider ${type}`}
			style={{ height: h, width: w, color: color }}
		/>
	);
};

export default Divider;
