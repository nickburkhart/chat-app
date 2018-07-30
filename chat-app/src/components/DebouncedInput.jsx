import React from 'react';
import { debounce } from 'lodash-es';

export class DebouncedInput extends React.PureComponent {
	input = null;
	
	constructor(props) {
		super(props);
		this.startValue = props.defaultValue;
	}

	render() {
		const { onTextChanged, ...inputProps } = this.props;
		return (
				<input
				 {...inputProps}
				 onChange={this._onNameChange}
				 ref={this._setInput}
				/>
		);
	}
	_onNameChange = debounce((event) => {
		this.props.onTextChanged(this.startValue, this.input.value);
		this.startValue = this.input.value;
	}, 500)
	_setInput = (ref) => this.input = ref;
}