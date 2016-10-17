import React from 'react';
import {observer} from 'mobx-react';
import {action} from 'mobx';
import TodoStore from '../stores/TodoStore';


@observer
class TodoListItem extends React.Component {

  taskSection() {
    const {task, isCompleted, isEditing} = this.props.todo;
    const taskStyle                      = {
      color : isCompleted ? 'green' : 'red',
      cursor: 'pointer'
    };

    if (this.props.todo.isEditing) {
      return (
        <form onSubmit={this.saveTask.bind(this)}>
          <input type="text" defaultValue={this.props.todo.task} ref="taskEdited"/>
        </form>
      )
    }
    return <p style={taskStyle} onClick={this.toggleClass.bind(this)}>{task}</p>
  }

  actionSection() {
    let todo = this.props.todo;
    if (todo.isEditing) {
      return (
        <td>
          <button onClick={this.saveTask.bind(this)}>Save</button>
          <button onClick={this.onCancel.bind(this)}>Cancel</button>
        </td>
      )
    } else {
      return (
        <td>
          <button onClick={this.onEdit.bind(this)}>Edit</button>
          <button onClick={this.onDelete.bind(this)}>Delete</button>
        </td>
      )
    }
  }

  // ----------------------

  @action
  toggleClass() {
    let todo = this.props.todo;
    todo.isCompleted = !todo.isCompleted;
  }

  onEdit() {
    let todo = this.props.todo;
    todo.isEditing = true;
  }

  onCancel() {
    let todo = this.props.todo;
    todo.isEditing = false;
  }

  onDelete() {
    let todo = this.props.todo;
    console.log('task ', todo.task);
    TodoStore.delete(todo.task)
  }

  saveTask(event) {
    event.preventDefault();
    console.log('saveTask ', this.refs.taskEdited.value);
    let oldTask = this.todo.task;
    let newTask = this.refs.taskEdited.value;
    this.todo.isEditing = false;
    TodoStore.saveTask(oldTask, newTask);
  }

  render() {
    return (
      <tr>
        <td>
          {this.taskSection()}
        </td>
        {this.actionSection()}
      </tr>
    )
  }
}

export default TodoListItem;