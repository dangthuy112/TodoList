import React, { Component } from 'react';
import Todos from './Todos';
import AddTodo from './AddTodo';

class Main extends Component {
    state = {
        todos: [
            { id: 1, content: 'buy some milk' },
            { id: 2, content: 'play vidya games' }
        ]
    }

    deleteTodo = (id) => {
        const newList = this.state.todos.filter(todo => {
            return todo.id !== id;
        })

        this.setState({
            todos: newList
        });
    }

    addTodo = (todo) => {
        todo.id = Math.random();
        let todos = [...this.state.todos, todo];

        this.setState({
            todos
        })
    }


    render() {
        return (
            <div className="todo-app container">
                <h1 className="center blue-text">Todo's</h1>
                <Todos todos={this.state.todos} deleteTodo={this.deleteTodo} />
                <AddTodo addTodo={this.addTodo} />
            </div>
        )
    }
}

export default Main;