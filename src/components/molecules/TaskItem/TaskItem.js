import { Component } from '../../../core';
import '../../atoms';
import '../../molecules';

export class TaskItem extends Component {
  constructor() {
    super();
    this.state = {
      isEditting: false,
    };
  }

  static get observedAttributes() {
    return ['iscompleted', 'taskname', 'id'];
  }

  onClick(evt) {
    if (evt.target.closest('.edit')) {
      this.setState((state) => {
        return {
          ...state,
          isEditting: true,
        };
      });
    }
  }

  onCancelEdit() {
    this.setState((state) => {
      return {
        ...state,
        isEditting: false,
      };
    });
  }

  componentDidMount() {
    this.addEventListener('click', this.onClick);
    this.addEventListener('cancel-edit', this.onCancelEdit);
  }

  componentWillUnmount() {
    this.removeEventListener('click', this.onClick);
  }

  render() {
    return `
      <li class="list-group-item mt-3">
        <div class="form-check d-flex justify-content-between align-items-center">
            ${this.state.isEditting
        ? `
              <my-input-group 
                placeholder="Change task..."
                eventtype="edit-task"
                showcancel="${this.state.isEditting}"
                dataid="${this.props.id}"  
              >
              </my-input-group>
              `
        : `
              <div>                 
                <my-checkbox-group
                  iscompleted="${this.props.iscompleted}"
                  taskname="${this.props.taskname}"
                >
                </my-checkbox-group>
              </div>
              <div class='d-flex'>
                <my-button
                  eventtype="delete-task"
                  taskid="${this.props.id}" 
                  type="button"
                  classname="btn delete btn-danger btn-sm"
                  content="Delete"
                >
                </my-button>
                <my-button
                  taskid="${this.props.id}"  
                  type="button"
                  classname="btn edit btn-primary btn-sm"
                  content="Edit"
                >
                </my-button>
              </div>
              `
      }
        </div>
      </li>
      `;
  }
}

customElements.define('my-task-item', TaskItem);
