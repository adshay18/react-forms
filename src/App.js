import './App.css';
import BoxList from './BoxList';
import TodoList from './TodoList';

function App() {
	return (
		<div className="App">
			<h1>Box Form/List</h1>
			<BoxList />
			<h1>Todo App/List</h1>
			<TodoList />
		</div>
	);
}

export default App;
