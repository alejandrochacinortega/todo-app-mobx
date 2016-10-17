import React from 'react';
import DevTools from 'mobx-react-devtools';
import {observer} from 'mobx-react';
import TodoStore from '../stores/TodoStore';

import TodoList from './TodoList';
import CreateTodo from './CreateTodo';


@observer
class App extends React.Component {
  render() {
    let todos = TodoStore.todos;
    console.log('todos ', todos);
    return (
      <div>
        <DevTools />
        <CreateTodo/>
        <TodoList todos={todos} />
      </div>
    )
  }
}

export default App;