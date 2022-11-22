import { Component } from '../../../core';

export class Button extends Component {
	constructor() {
		super();
	}

	static get observedAttributes() {
		return ['content', 'classname', 'eventtype', 'type', 'taskid'];
	}

	onDelete() {
		this.dispatch(this.props.eventtype, { taskId: this.props.taskid });
	}

	onEdit() {
		this.dispatch(this.props.eventtype, { taskId: this.props.taskid });
	}

	onClick(evt) {
		if (evt.target.closest('.delete')) {
			this.onDelete();
		}
		if (evt.target.closest('.edit')) {
			this.onEdit();
		}
	}

	componentDidMount() {
		this.addEventListener('click', this.onClick);
	}

	render() {
		return `
		<button type="${this.props.type}" class="${this.props.classname}">
			${this.props.content}
		</button>
		`;
	}
}

customElements.define('my-button', Button);
