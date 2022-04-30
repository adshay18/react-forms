import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import BoxList from './BoxList';

// Smoke test
it('renders without crashing', function() {
	render(<BoxList />);
});

// Snapshot
it('matches snapshot', function() {
	const { asFragment } = render(<BoxList />);
	expect(asFragment()).toMatchSnapshot();
});

it('can add a new box and delete it', function() {
	const { getByLabelText, queryByText } = render(<BoxList />);

	// no items yet
	expect(document.querySelector('div.Box')).not.toBeInTheDocument();

	const colorInput = getByLabelText('Color:');
	const widthInput = getByLabelText('Width:');
	const heightInput = getByLabelText('Height:');
	const submitBtn = queryByText('Add box');

	// fill out the form
	fireEvent.change(colorInput, { target: { value: '#000000' } });
	fireEvent.change(widthInput, { target: { value: 100 } });
	fireEvent.change(heightInput, { target: { value: 100 } });
	fireEvent.click(submitBtn);

	// item exists!
	expect(document.querySelector('div.Box')).toBeInTheDocument();

	const deleteBtn = queryByText('X');

	// click delete button
	fireEvent.click(deleteBtn);

	// box is deleted
	expect(document.querySelector('div.Box')).not.toBeInTheDocument();
});
