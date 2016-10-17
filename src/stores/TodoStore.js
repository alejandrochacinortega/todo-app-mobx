import {
  action,
  computed,
  observable
} from 'mobx';
import TodoModel from '../models/todoModel';
import _ from 'lodash';

const TODOS = [
  {
    task       : 'make React Tutorial',
    isCompleted: false
  },
  {
    task       : 'eat dinner',
    isCompleted: true
  }
];

class TodoStore {
  @observable todos = [];

  constructor() {
    TODOS.map(todo => this.todos.push(new TodoModel(todo)))
  }

  @action
  add(newTask) {
    this.todos.push({
      task: newTask,
      isCompleted: false,
      isEditing: false
    })
  }

  @action
  delete(task) {
    _.remove(this.todos, todo => todo.task === task)
  }

  @action
  saveTask(oldTask, newTask) {
    let foundTask = _.find(this.todos, todo => todo.task === oldTask);
    foundTask.task = newTask;
  }

}

const todoStore = new TodoStore();

export default todoStore;