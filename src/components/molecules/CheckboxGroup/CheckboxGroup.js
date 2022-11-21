import { Component } from "../../../core";

export class CheckboxGroup extends Component {
  constructor() {
    super();
  }

  static get observedAttributes() {
    return ['iscompleted', 'taskname']
  }

  render() {


    return `
        <label class="form-check-label">
          <input
            class="form-check-input"
            ${JSON.parse(this.props.iscompleted) ? 'checked' : ''} 
            type="checkbox"
            value=""
          >
          <span>${this.props.taskname}</span>
        </label>
      `;
  }
}

customElements.define('my-checkbox-group', CheckboxGroup);