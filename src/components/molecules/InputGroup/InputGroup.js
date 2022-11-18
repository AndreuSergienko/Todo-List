import { Component } from '../../../core';
import { todoList } from '../../../services';
import '../../atoms';

export class InputGroup extends Component {
	constructor() {
		super();
		this.state = {
			inputValue: '',
			isSending: false,
		};
	}

	// onSave() {
	// 	this.setState((state) => {
	// 		return {
	// 			...state,
	// 			isSending: true,
	// 		};
	// 	});
	// 	todoList
	// 		.createTask({ title: this.state.inputValue, isCompleted: false })
	// 		.then(() => {
	// 			this.setState((state) => {
	// 				return {
	// 					...state,
	// 					inputValue: '',
	// 				};
	// 			});
	// 		})
	// 		.catch((err) => {
	// 			console.error(err.message);
	// 		})
	// 		.finally(() => {
	// 			this.setState((state) => {
	// 				return {
	// 					...state,
	// 					isSending: false,
	// 				};
	// 			});
	// 		});
	// }

	onSubmit(evt) {
		evt.preventDefault();
		const data = new FormData(evt.target);
		const task = {};
		for (const value of data.entries()) {
			console.log(value);
		}
		// this.setState((state) => {
		// 	return {
		// 		...state,
		// 		isSending: true,
		// 	};
		// });
		// todoList
		// 	.createTask()
		// 	.then(() => {
		// 		this.setState((state) => {
		// 			return {
		// 				...state,
		// 				inputValue: '',
		// 			};
		// 		});
		// 	})
		// 	.catch((err) => {
		// 		console.error(err.message);
		// 	})
		// 	.finally(() => {
		// 		this.setState((state) => {
		// 			return {
		// 				...state,
		// 				isSending: false,
		// 			};
		// 		});
		// 	});
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
		// this.addEventListener('save-task', this.onSave);
		this.addEventListener('submit', this.onSubmit);
	}

	render() {
		return `
		${
			this.state.isSending
				? `
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
				: ''
		}
      <form id='form'>
			<div class="input-group mb-3">
				<my-input type="text" name="task" placeholder="Add a new task">
				</my-input>
				<my-button content="Save" type="submit" classname="btn btn-outline-primary" eventtype="save-task"></my-button>

			</div>
		</form>
      `;
	}
}

customElements.define('my-input-group', InputGroup);
