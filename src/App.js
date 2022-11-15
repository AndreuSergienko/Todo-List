import { Component } from './core';
import './components';
import './components/molecules';

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
      `;
	}
}

customElements.define('my-app', App);


// <ul class="list-group">
// <li class="list-group-item">
//   <div class="form-check d-flex justify-content-between align-items-center">
//     <div>
//         <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
//         <label class="form-check-label" for="flexCheckDefault">
//           Default checkbox
//         </label>
//       </div>
//       <div class='d-flex'>
//         <my-button classname="btn btn-danger btn-sm" content="Delete"></my-button>
//         <my-button classname="btn btn-primary btn-sm" content="Update"></my-button>
//       </div>
//   </div>
// </li>
// </ul>
