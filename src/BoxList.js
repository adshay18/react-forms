import { useState } from 'react';
import Box from './Box';
import { v4 as uuid } from 'uuid';
import NewBoxForm from './NewBoxForm';

const BoxList = () => {
	const [ boxes, setBoxes ] = useState([]);

	const addBox = (box) => {
		let newBox = { ...box, id: uuid() };
		setBoxes((boxes) => [ ...boxes, newBox ]);
	};

	return (
		<div className="BoxList">
			<NewBoxForm addBox={addBox} />
			<h2>Boxes:</h2>
			{boxes.map((box) => (
				<Box
					key={box.id}
					backgroundColor={box.backgroundColor}
					width={Number(box.width)}
					height={Number(box.height)}
				/>
			))}
		</div>
	);
};

export default BoxList;
