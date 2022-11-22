import { Component } from '../../../core';
import '../../molecules';

export class TasksList extends Component {
	constructor() {
		super();
	}

	static get observedAttributes() {
		return ['tasks'];
	}

	render() {
		return `
        <ul class="list-group">
          ${JSON.parse(this.props.tasks)
					.map(
						(taskItem) =>
							`
						<my-task-item 
							id="${taskItem.id}"
							iscompleted="${taskItem.isCompleted}"
							taskname="${taskItem.title}"
						>
						</my-task-item>   
          			`
					)
					.join('')}
        </ul>
      `;
	}
}

customElements.define('my-tasks-list', TasksList);
