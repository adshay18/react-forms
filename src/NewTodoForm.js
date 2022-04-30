import React, { useState } from 'react';

const NewTodoForm = ({ addTodo }) => {
	const INITIAL_STATE = { text: '' };
	const [ formData, setFormData ] = useState(INITIAL_STATE);

	const handleSubmit = (evt) => {
		evt.preventDefault();
		addTodo(formData);
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
			<label htmlFor="text">Todo: </label>
			<input type="text" id="text" name="text" value={formData.text} onChange={handleChange} />

			<button>Add Task</button>
		</form>
	);
};

export default NewTodoForm;
