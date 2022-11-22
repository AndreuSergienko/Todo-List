import { Component } from '../../../core';
import '../../atoms';

export class InputGroup extends Component {
	constructor() {
		super();
	}

	static get observedAttributes() {
		return ['placeholder', 'customclass', 'eventtype', 'showcancel', 'dataid'];
	}

	onSubmit(evt) {
		evt.preventDefault();
		if (this.props.eventtype) {
			evt.stopPropagation()
			this.dispatch(this.props.eventtype, { taskId: this.props.dataid });
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
      <form ${this.props.dataid ? `data-id="${this.props.dataid}"` : ''}>
			<div class="input-group">
				<my-input customclass="${this.props.customclass || ''}" type="text" name="title" placeholder="${this.props.placeholder}">
				</my-input>
				${this.props.showcancel ? `
					<my-button
					 	content="Cancel" 
						type="button"
						classname="btn btn-secondary cancel"
						eventtype="cancel-edit" 
					>
					</my-button>
					<my-button 
						content="Save changes"
						type="submit"
						classname="btn btn-outline-primary"
					</my-button>
				`
				:
				`
				<my-button content="Save" type="submit" classname="btn btn-outline-primary" eventtype="save-task"></my-button>
				`
			}
			</div>
		</form>
      `;
	}
}

customElements.define('my-input-group', InputGroup);
