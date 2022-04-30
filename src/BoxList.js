import { useState } from 'react';
import Box from './Box';

const BoxList = () => {
	const [ boxes, setBoxes ] = useState([
		{
			backgroundColor: 'orange',
			width: 50,
			height: 75
		},
		{
			backgroundColor: 'yellow',
			width: 200,
			height: 150
		}
	]);

	return (
		<div className="BoxList">
			{/* <NewBoxForm /> */}
			{boxes.map((box) => <Box backgroundColor={box.backgroundColor} width={box.width} height={box.height} />)}
		</div>
	);
};

export default BoxList;
