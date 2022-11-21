import { Component } from './core';
import './components/molecules';
import './components/organisms'

export class App extends Component {
	constructor() {
		super();
		this.state = {};
	}

	render() {
		return `
      <div class='container mt-5'>
        <my-input-group></my-input-group>
      </div>
			<div class='container mt-5'>
        <my-tasks-list></my-tasks-list>
      </div>
      `;
	}
}

customElements.define('my-app', App);
