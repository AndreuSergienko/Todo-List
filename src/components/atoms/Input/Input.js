import { Component } from '../../../core';
import './Input.scss';

export class Input extends Component {
	constructor() {
		super();
	}

	static get observedAttributes() {
		return [
			'type',
			'placeholder',
			'name',
			'customclass',
			'showcancel',
			'showsave',
		];
	}

	render() {
		return `
      <input
			name="${this.props.name}"
         type="${this.props.type}"
         class="form-control ${this.props.customclass}"
         placeholder="${this.props.placeholder}"
       />
      `;
	}
}

customElements.define('my-input', Input);
