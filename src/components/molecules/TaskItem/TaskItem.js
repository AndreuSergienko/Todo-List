import { Component } from "../../../core";
import '../../atoms'
import '../../molecules'

export class TaskItem extends Component {
  constructor() {
    super();
    // this.state = {
    //   isCompleted: false
    // }
  }

  static get observedAttributes() {
    return ['iscompleted', 'taskname']
  }

  render() {
    console.log(this.props);
    return `
      <li class="list-group-item mt-3">
        <div class="form-check d-flex justify-content-between align-items-center">
            <div>
              <my-checkbox-group
                iscompleted="${this.props.iscompleted}"
                taskname="${this.props.taskname}"
              >
              </my-checkbox-group>
            </div>
            <div class='d-flex'>
              <my-button classname="btn btn-danger btn-sm" content="Delete"></my-button>
              <my-button classname="btn btn-primary btn-sm" content="Update"></my-button>
            </div>
        </div>
      </li>
      `;
  }
}

customElements.define('my-task-item', TaskItem);