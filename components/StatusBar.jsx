const StatusBar = ({ progress }) => {
	return (
		<div className='status-bar-wrapper'>
			<div className='status-bar' style={{ width: progress + '%' }} />
		</div>
	);
};

export default StatusBar;
