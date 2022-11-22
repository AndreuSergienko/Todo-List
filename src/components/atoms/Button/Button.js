import { Component } from '../../../core';

export class Button extends Component {
	constructor() {
		super();
	}

	static get observedAttributes() {
		return ['content', 'classname', 'eventtype', 'type', 'taskid'];
	}

	onDelete() {
		if (this.props.eventtype) {
			this.dispatch(this.props.eventtype, { taskId: this.props.taskid });
		}
	}

	onEdit() {
		if (this.props.eventtype) {
			this.dispatch(this.props.eventtype, { taskId: this.props.taskid });
		}
	}

	onCancel() {
		if (this.props.eventtype) {
			this.dispatch(this.props.eventtype);
		}
	}

	onClick(evt) {
		if (evt.target.closest('.delete')) {
			this.onDelete();
		}
		if (evt.target.closest('.edit')) {
			this.onEdit();
		}
		if (evt.target.closest('.cancel')) {
			this.onCancel()
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
