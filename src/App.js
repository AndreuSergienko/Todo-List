import { Component } from './core';
import './components';
import { todoList } from './services/todoList/TodoList';

export class App extends Component {
	constructor() {
		super();
		this.state = {
			isLoading: false,
			value: '',
		};
	}

	registerEvents() {
		this.addEventListener('change', (evt) => {
			if (evt.target.closest('.form-control')) {
				this.setState((state) => {
					return {
						...state,
						value: evt.target.value,
					};
				});
			}
		});

		window.addEventListener('save-task', () => {
			this.setState((state) => {
				return {
					...state,
					isLoading: true,
				};
			});
			todoList.createTask({ title: this.state.value }).finally(() => {
				this.setState((state) => ({ ...state, isLoading: false }));
			});
		});
	}

	render() {
		return `
      ${
			this.state.isLoading &&
			`
         <div class="d-flex justify-content-center align-items-center w-100 h-100" style="position: fixed;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background-color: #000;
            opacity: 0.4;
            z-index: 1;">
            <div class="spinner-border" role="status">
               <span class="visually-hidden">Loading...</span>
            </div>
         </div>
         `
		}
      <div class='container mt-5'>
      <div class="input-group mb-3">
        <input value='${
				this.state.value
			}' type="text" class="form-control" placeholder="Add a new task" aria-label="Recipient's username" aria-describedby="button-addon2">
        <my-button classname="btn btn-outline-primary" eventtype="save-task"></my-button>
      </div>
      <ul class="list-group">
        <li class="list-group-item">
          <div class="form-check d-flex justify-content-between align-items-center">
            <div>
                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                <label class="form-check-label" for="flexCheckDefault">
                  Default checkbox
                </label>
              </div>
              <div class='d-flex'>
                <my-button classname="btn btn-danger btn-sm" content="Delete"></my-button>
                <my-button classname="btn btn-primary btn-sm" content="Update"></my-button>
              </div>
          </div>
        </li>
      </ul>
    </div>
      `;
	}
}

customElements.define('my-app', App);
