import { Component } from '../../../core';
import '../../atoms';

export class InputGroup extends Component {
	constructor() {
		super();
	}

	static get observedAttributes() {
		return ['eventtype'];
	}

	onSubmit(evt) {
		evt.preventDefault();
		if (this.props.eventype) {
			this.dispatch(this.props.eventype);
		}
	}

	componentDidMount() {
		this.addEventListener('submit', this.onSubmit);
	}

	componentWillUnmount() {
		this.removeEventListener('submit', this.onSubmit);
	}

	render() {
		return `
      <form id='form'>
			<div class="input-group">
				<my-input customclass="custom-form-input" type="text" name="title" placeholder="Change your task...">
				</my-input>
				<my-button content="Save" type="submit" classname="btn btn-outline-primary" eventtype="save-task"></my-button>
			</div>
		</form>
      `;
	}
}

customElements.define('my-input-group', InputGroup);
