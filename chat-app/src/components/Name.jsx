import React from 'react';
import { DebouncedInput } from './DebouncedInput';

export const Name = props => (
	<div>
		<label htmlFor="username">Name:</label>
		<DebouncedInput
			id="username"
			type="text"
			onTextChanged={props.onNameChange}
			defaultValue={props.value}
		/>
	</div>
);