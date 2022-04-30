import React, { useState } from 'react';
import './Todo.css';

const Todo = ({ removeTodo, idx, text }) => {
	return (
		<React.Fragment>
			<div className="Todo">{text}</div>
			<button className="Todo-remove" onClick={() => removeTodo(idx)}>
				Done
			</button>
			<br />
		</React.Fragment>
	);
};

export default Todo;
