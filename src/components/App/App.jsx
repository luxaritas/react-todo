import React from 'react';
import {TodoList, TodoListList} from 'components';
import styles from './App.module.css';

export default function App() {
  return (
    <div className={styles.app}>
      <TodoListList className={styles.todoListList}/>
      <TodoList className={styles.todoList}/>
    </div>
  );
}
