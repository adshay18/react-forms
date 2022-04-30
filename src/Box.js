import React, { useState } from 'react';
import './Box.css';

const Box = ({ backgroundColor, width, height }) => {
	return <div className="Box" style={{ backgroundColor, width, height }} />;
};

export default Box;
