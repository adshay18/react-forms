import { useState } from 'react';
import Todo from './Todo';
import { v4 as uuid } from 'uuid';
import NewTodoForm from './NewTodoForm';

const TodoList = () => {
	const [ todos, setTodos ] = useState([]);

	const addTodo = (todo) => {
		let newTodo = { ...todo, id: uuid() };
		setTodos((todos) => [ ...todos, newTodo ]);
	};

	const removeTodo = (idx) => {
		let todosCopy = [ ...todos ];
		let todo = todosCopy.splice(todosCopy[idx], 1);
		setTodos((todos) => [ ...todosCopy ]);
	};

	return (
		<div className="TodoList">
			<NewTodoForm addTodo={addTodo} />
			<h2>Todos:</h2>
			{todos.map((todo, i) => <Todo key={todo.id} idx={i} removeTodo={removeTodo} text={todo.text} />)}
		</div>
	);
};

export default TodoList;
