import React from 'react';
import {observer} from 'mobx-react';

import TodoListItem from './TodoListItem';

@observer
class TodoList extends React.Component {
  render() {
    return (
      <table>
        <thead>
        <tr>
          <th>Task</th>
        </tr>
        </thead>
        <tbody>
        {this.props.todos.map((todo, index) => <TodoListItem key={index} todo={todo} />)}
        </tbody>
      </table>
    )
  }
}

export default TodoList;