import { Component } from '../../../core';
import '../../atoms';
import { todoList } from '../../../services';

export class InputGroup extends Component {
	constructor() {
		super();
		this.state = {
			inputValue: '',
		};
	}

	onSave() {
		todoList
			.createTask({ title: this.state.inputValue, isCompleted: false })
			.then(() => {
				this.setState((state) => {
					return {
						...state,
						inputValue: '',
					};
				});
			});
	}

	onInput(evt) {
		this.setState((state) => {
			return {
				...state,
				inputValue: evt.detail.value,
			};
		});
	}

	componentDidMount() {
		this.addEventListener('save-task', this.onSave);
		this.addEventListener('custom-input', this.onInput);
	}

	render() {
		return `
      <div class="input-group mb-3">
         <my-input value="${this.state.inputValue}" type="text" placeholder="Add a new task"></my-input>
         <my-button content="Save" classname="btn btn-outline-primary" eventtype="save-task"></my-button>
      </div>
      `;
	}
}

customElements.define('my-input-group', InputGroup);
