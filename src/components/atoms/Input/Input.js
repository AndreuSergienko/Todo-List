import { Component } from '../../../core';

export class Input extends Component {
	constructor() {
		super();
	}

	static get observedAttributes() {
		return ['type', 'placeholder', 'name'];
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
