import { Component } from '../../../core';
import './CheckboxGroup.scss';

export class CheckboxGroup extends Component {
	constructor() {
		super();
	}

	static get observedAttributes() {
		return ['iscompleted', 'taskname', 'taskid'];
	}

	onClick(evt) {
		if (evt.target.closest('.form-check-input')) {
			const checkbox = evt.target.closest('.form-check-input');
			this.dispatch('checked', {
				isChecked: checkbox.checked,
				taskId: this.props.taskid,
				taskTitle: this.props.taskname,
			});
		}
	}

	componentDidMount() {
		this.addEventListener('click', this.onClick);
	}

	componentWillUnmount() {
		this.removeEventListener('click', this.onClick);
	}

	render() {
		return `
        <label class="form-check-label">
         <input
            class="form-check-input"
            ${JSON.parse(this.props.iscompleted) ? 'checked' : ''} 
            type="checkbox"
         >
         <span
			  class="${JSON.parse(this.props.iscompleted) ? 'completed' : ''}"
			>
				${this.props.taskname}
			</span>
        </label>
      `;
	}
}

customElements.define('my-checkbox-group', CheckboxGroup);
