import { Component } from '../../../core';
import { debounce } from '../../../utils/debounce';

export class Input extends Component {
	constructor() {
		super();
		this.state = {
			value: '',
		};

		this.onInput = this.onInput.bind(this);
	}

	componentWillUpdate(name, _, newValue) {
		if (name === 'value') {
			this.setState((state) => {
				return {
					...state,
					value: newValue,
				};
			});
		}
	}

	onInput(evt) {
		this.dispatch('custom-input', { value: evt.target.value });
	}

	componentDidMount() {
		this.addEventListener('input', debounce(this.onInput, 1000));
	}

	static get observedAttributes() {
		return ['type', 'value', 'placeholder'];
	}

	render() {
		return `
      <input
         type="${this.props.type}"
         value="${this.state.value}"
         class="form-control my-input"
         placeholder="${this.props.placeholder}"
       />
      `;
	}
}

customElements.define('my-input', Input);
