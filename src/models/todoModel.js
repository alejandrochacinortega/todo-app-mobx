import {
  action,
  computed,
  observable
} from 'mobx';

class TodoModel {
  @observable task;
  @observable isCompleted;
  @observable isEditing;

  constructor(todo) {
    this.task        = todo.task;
    this.isCompleted = todo.isCompleted;
    this.isEditing   = false;
  }
}

export default TodoModel;
