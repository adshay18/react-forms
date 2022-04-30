import React, { useState } from 'react';

const NewBoxForm = ({ addBox }) => {
	const INITIAL_STATE = { width: 0, height: 0, backgroundColor: '#000000' };
	const [ formData, setFormData ] = useState(INITIAL_STATE);

	const handleSubmit = (evt) => {
		evt.preventDefault();
		addBox(formData);
		setFormData(INITIAL_STATE);
	};

	const handleChange = (evt) => {
		const { name, value } = evt.target;
		setFormData((fData) => ({
			...fData,
			[name]: value
		}));
	};

	return (
		<form onSubmit={handleSubmit}>
			<label htmlFor="backgroundColor">Color: </label>
			<input
				type="color"
				id="backgroundColor"
				name="backgroundColor"
				value={formData.backgroundColor}
				onChange={handleChange}
			/>

			<label htmlFor="width">Width: </label>
			<input type="number" id="width" name="width" value={formData.width} onChange={handleChange} />

			<label htmlFor="height">Height: </label>
			<input type="number" id="height" name="height" value={formData.height} onChange={handleChange} />

			<button>Add box</button>
		</form>
	);
};

export default NewBoxForm;
