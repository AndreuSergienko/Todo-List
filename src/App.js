import { Component } from './core';
import './components';
import { todoList } from './services';

export class App extends Component {
	constructor() {
		super();
		this.state = {
			value: '',
		};
	}

	render() {
		return `
      <div class='container mt-5'>
      <div class="input-group mb-3">
        <input value='${this.state.value}' 
		  type="text" class="form-control" placeholder="Add a new task" aria-label="Recipient's username" aria-describedby="button-addon2">
        <my-button content="Save" classname="btn btn-outline-primary" eventtype="save-task"></my-button>
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
