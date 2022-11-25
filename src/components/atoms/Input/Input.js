import { Component } from '../../../core';
import './Input.scss';

export class Input extends Component {
	constructor() {
		super();
	}

	static get observedAttributes() {
		return ['type', 'placeholder', 'name', 'customclass', 'value'];
	}

	render() {
		return `
      <input
			name="${this.props.name}"
         type="${this.props.type}"
         class="form-control ${this.props.customclass}"
         placeholder="${this.props.placeholder}"
			value="${this.props.value ?? ''}"
       />
      `;
	}
}

customElements.define('my-input', Input);
