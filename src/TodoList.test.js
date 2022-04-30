import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import TodoList from './TodoList';

// Smoke test
it('renders without crashing', function() {
	render(<TodoList />);
});

// Snapshot
it('matches snapshot', function() {
	const { asFragment } = render(<TodoList />);
	expect(asFragment()).toMatchSnapshot();
});

it('can add a new todo and delete it', function() {
	const { getByLabelText, queryByText } = render(<TodoList />);

	// no items yet
	expect(document.querySelector('div.Todo')).not.toBeInTheDocument();

	const textInput = getByLabelText('Todo:');
	const submitBtn = queryByText('Add Task');

	// fill out the form
	fireEvent.change(textInput, { target: { value: 'Test todo' } });
	fireEvent.click(submitBtn);

	// item exists!
	expect(document.querySelector('div.Todo')).toBeInTheDocument();

	const deleteBtn = queryByText('Done');

	// click delete button
	fireEvent.click(deleteBtn);

	// box is deleted
	expect(document.querySelector('div.Todo')).not.toBeInTheDocument();
});
