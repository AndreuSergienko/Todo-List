import { Component } from "../../../core";
import '../../molecules'

export class TasksList extends Component {
  constructor() {
    super();
    this.state = {
      items: [
        {
          taskName: 'Clean your fuckin teeth',
          isCompleted: true,
        },
        {
          taskName: 'Charge phone',
          isCompleted: false,
        },
        {
          taskName: 'Make breakfast',
          isCompleted: false,
        },
      ]
    };
  }

  render() {
    return `
        <ul class="list-group">
          ${this.state.items
        .map((taskItem) => (
          `
            <my-task-item iscompleted="${taskItem.isCompleted}" taskname="${taskItem.taskName}">
            </my-task-item>   
          `
        ))
        .join('')
      }
        </ul>
      `;
  }
}

customElements.define('my-tasks-list', TasksList);