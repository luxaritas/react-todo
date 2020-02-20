import React from 'react';
import {Checkbox, TodoItemPanel} from 'components';
import trash from 'icons/trash.svg';
import styles from './TodoItem.module.css';

export default class TodoItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            checked: false
        }
    }

    render() {
        return (
            <TodoItemPanel className={`${styles.todoItem} ${this.state.checked ? styles.checked : ''}`}
                           onClick={() => this.setState(state => ({checked: !state.checked}))}
            >
                <Checkbox checked={this.state.checked}
                          onChange={() => this.setState(state => ({checked: !state.checked}))}
                >
                    {this.state.checked ? <s>{this.props.name}</s> : this.props.name}
                </Checkbox>
                <img src={trash} alt="Delete" className={styles.trash} onClick={this.props.trashClicked}/>
            </TodoItemPanel>
        );
    }
}
