import React from 'react';
import {observer} from 'mobx-react';
import TodoStore from '../stores/TodoStore';



@observer
class CreateTodo extends React.Component {
  createTask(event) {
    event.preventDefault();
    var newTask = this.refs.newTask.value;
    console.log('creating ', newTask);
    TodoStore.add(newTask);
    this.refs.newTask.value = "";
  }


  render() {
    return (
      <form onSubmit={this.createTask.bind(this)}>
        <input type="text" placeholder="Add new task" ref="newTask"/>
        <button onClick={this.createTask.bind(this)}>Create</button>
      </form>
    )
  }
}

export default CreateTodo;