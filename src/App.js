import { Component } from './core';
import './components/molecules';
import './components/organisms';
import { todoList } from './services';

export class App extends Component {
	constructor() {
		super();
		this.state = {
			tasks: [],
			isSending: false,
			isRemoving: false,
			isEditting: false,
		};
	}

	getFirestoreTasks() {
		todoList
			.getTasks()
			.then((data) => {
				this.setState((state) => {
					return {
						tasks: data,
					};
				});
			})
			.catch((err) => {
				console.error(err);
			});
	}

	onSubmit(evt) {
		const newTask = {
			isCompleted: false,
		};

		const formData = new FormData(evt.target);
		for (const [key, value] of formData.entries()) {
			newTask[key] = value;
		}

		this.setState((state) => {
			return {
				...state,
				isSending: true,
			};
		});

		todoList
			.createTask(newTask)
			.then(() => {
				this.setState((state) => {
					return {
						...state,
						isSending: false,
					};
				});
				this.getFirestoreTasks();
			})
			.catch((err) => {
				console.error(err.message);
			});
	}

	onTaskEdit(evt) {}

	onTaskDelete(evt) {
		this.setState((state) => {
			return {
				...state,
				isRemoving: true,
			};
		});

		todoList
			.deleteTask(evt.detail.taskId)
			.then(() => {
				this.setState((state) => {
					return {
						...state,
						isRemoving: false,
					};
				});
				this.getFirestoreTasks();
			})
			.catch((err) => {
				console.error(err);
			});
	}

	componentDidMount() {
		this.getFirestoreTasks();
		this.addEventListener('submit', this.onSubmit);
		this.addEventListener('delete-task', this.onTaskDelete);
		this.addEventListener('edit-task', this.onTaskEdit);
	}

	render() {
		return `
		${
			this.state.isSending || this.state.isRemoving
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
      <div class='container mt-5'>
        <my-input-group></my-input-group>
      </div>
		<div class='container mt-5'>
      	<my-tasks-list
		  	 	tasks='${JSON.stringify(this.state.tasks)}'>
		  	</my-tasks-list>
      </div>
      `;
	}
}

customElements.define('my-app', App);
