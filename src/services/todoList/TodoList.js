import { Database } from '../../services';

class TodoList {
	constructor() {
		this.database = Database.getInstance();
	}

	createTask(body) {
		return this.database.create('tasks', body);
	}
}

export const todoList = new TodoList();
