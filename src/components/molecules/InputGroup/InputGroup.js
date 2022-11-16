import { Component } from '../../../core';
import { todoList } from '../../../services';
import '../../atoms';

export class InputGroup extends Component {
	constructor() {
		super();
		this.state = {
			inputValue: '',
			isSending: false
		};
	}

	onSave() {
		this.setState((state) => {
			return {
				...state,
				isSending: true
			}
		})
		todoList
			.createTask({ title: this.state.inputValue, isCompleted: false })
			.then(() => {
				this.setState((state) => {
					return {
						...state,
						inputValue: '',
						isSending: false
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
		${this.state.isSending ?
				`
			<div
		 	style="
			position:fixed;
			top:0;
			left:0;
			right:0;
			bottom:0;
			display:flex;
			justify-content:center;
			align-items:center;
			z-index: 10;
			background: rgba(0,0,0,0.5)
			">
				<div class="spinner-border" role="status">
					<span class="visually-hidden">Loading...</span>
				</div>
		</div>
			`
				:
				''
			}
      <div class="input-group mb-3">
         <my-input value="${this.state.inputValue}" type="text" placeholder="Add a new task"></my-input>
         <my-button content="Save" classname="btn btn-outline-primary" eventtype="save-task"></my-button>
      </div>
      `;
	}
}

customElements.define('my-input-group', InputGroup);
