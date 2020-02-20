import React from 'react';
import {Panel, TodoItem, TodoItemPanel} from 'components';
import add from 'icons/add.svg';
import styles from './TodoList.module.css';

export default class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
      newText: ''
    }
  }
  
  removeTodo(idx) {
    this.setState(state => ({
      todos: [...state.todos.slice(0, idx), ...state.todos.slice(idx + 1)]
    }));
  }

  maybeAddTodo(e) {
    if (e.key === 'Enter') {
      this.setState((state) => ({
        todos: [...state.todos, state.newText],
        newText: ''
      }));
    }
  }

  render() {
    const todos = this.state.todos.map(
      (todo, idx) => <TodoItem name={todo} key={`${todo}-${idx}`} trashClicked={() => this.removeTodo(idx)}/>
    );

    return (
      <Panel className={this.props.className} heading="Todo List">
        <ul className={styles.todoList}>
          {todos}
          <TodoItemPanel className={styles.addPanel}>
            <img src={add} alt="" className={styles.addIcon}/>
            <input type="text" placeholder="Add new task..." className={styles.addInput}
                   value={this.state.newText} onChange={(e) => this.setState({newText: e.target.value})}
                   onKeyPress={(e) => this.maybeAddTodo(e)}
            />
          </TodoItemPanel>
        </ul>
      </Panel>
    );
  }
}
