import React, { Component } from 'react';
import TodoService from '../../api/todo/TodoService.js'
import AuthenticationService from './AuthenticationService.js'

class ListTodoComponent extends Component {

    constructor(props) {
        super(props) // parent sets props to this.props

        this.state = {
            todos: [], //if I make the call to API in the constructor, I have to wait for the response to construct the object and it's not a good practice.
            message: null
        }

        this.deleteTodoClicked = this.deleteTodoClicked.bind(this)
        this.updateTodoClicked = this.updateTodoClicked.bind(this)
        this.refreshTodos = this.refreshTodos.bind(this)
    }

    componentDidMount(){ //Called immediately after a component is mounted. Setting state here will trigger re-rendering.
        this.refreshTodos()
    }

    deleteTodoClicked(id){
        let username = AuthenticationService.getLoggedInUsername()

        TodoService.deleteTodo(username,id)
        .then( response => {
            this.setState({ message: `Delete of todo ${id} successful.` })
            this.refreshTodos()
        })
    }

    updateTodoClicked(id){
        //let username = AuthenticationService.getLoggedInUsername()

        this.props.history.push(`/todos/${id}`)
    }

    refreshTodos(){
        let username = AuthenticationService.getLoggedInUsername()
        TodoService.retrieveAllTodos(username)
        .then( response => {
            this.setState({
                todos: response.data
            })
        })
    }

    render() {
        return (
            <div>
                <h1>List Todos</h1>
                {this.state.message && <div className="alert alert-success">{this.state.message}</div>}
                <div className="container">
                <table className="table">
                    <thead>
                        <tr>
                            <th>Description</th>
                            <th>Is Completed</th>
                            <th>Target Date</th>
                            <th>Update</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.todos.map(
                                todo =>
                                    <tr key={todo.id}>
                                        <td>{todo.description}</td>
                                        <td>{todo.done.toString()}</td>
                                        <td>{todo.description.toString()}</td>
                                        <td><button className="btn btn-success" onClick={() => this.updateTodoClicked(todo.id)}>Update</button></td>
                                        <td><button className="btn btn-warning" onClick={() => this.deleteTodoClicked(todo.id)}>Delete</button></td>
                                    </tr>
                            )
                        }
                    </tbody>
                </table>
                </div>
            </div>
        )
    }
}

export default ListTodoComponent
