import React from 'react';

export const CloseButton = props => (
	<button
		aria-label='close'
		className='close-button'
		onClick={props.onClick}
		type="button"
	>
		<span className='close-x'>+</span>
	</button>
);