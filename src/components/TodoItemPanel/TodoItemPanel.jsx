import React from 'react';
import styles from './TodoItemPanel.module.css';

export default function TodoItemPanel({children, className, onClick}) {
    return <li className={`${styles.todoItemPanel} ${className}`} onClick={onClick}>{children}</li>
}