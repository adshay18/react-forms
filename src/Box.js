import React, { useState } from 'react';
import './Box.css';

const Box = ({ removeBox, backgroundColor, width, height, idx }) => {
	return (
		<React.Fragment>
			<div className="Box" style={{ backgroundColor, width, height }} />
			<button className="Box-remove" onClick={() => removeBox(idx)}>
				X
			</button>
			<br />
		</React.Fragment>
	);
};

export default Box;
