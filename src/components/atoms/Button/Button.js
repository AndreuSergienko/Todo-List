import { Component } from '../../../core';

export class Button extends Component {
	constructor() {
		super();
	}

	componentDidMount() {
		this.addEventListener('click', () => {
			this.dispatch(this.props.eventtype);
		});
	}

	static get observedAttributes() {
		return ['content', 'classname', 'eventtype'];
	}

	render() {
		return `<button type="button" class="${this.props.classname}">${this.props.content}</button>`;
	}
}

customElements.define('my-button', Button);