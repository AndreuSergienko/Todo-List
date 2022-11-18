import { Component } from '../../../core';

export class Input extends Component {
	constructor() {
		super();
		this.state = {
			value: '',
		};

		this.onInput.bind(this);
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
		this.addEventListener('change', this.onInput);
	}

	static get observedAttributes() {
		return ['type', 'placeholder'];
	}

	render() {
		return `
      <input
			name="${this.props.name}"
         type="${this.props.type}"
         class="form-control my-input"
         placeholder="${this.props.placeholder}"
       />
      `;
	}
}

customElements.define('my-input', Input);
