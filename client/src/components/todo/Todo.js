import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class Todo extends Component {
    constructor() {
        super();
        this.state = {
            todo: {}
        } 
    }

    componentWillMount() {
        this._fetchTodo();
    }

    _fetchTodo = async () => {
        try {
            let userId = this.props.match.params.userId;
            let listId = this.props.match.params.listId;
            let todoId = this.props.match.params.todoId;
            const res = await axios.get(`/api/todo/${userId}/${listId}/${todoId}`);
            this.setState({todo: res.data});
        }
        catch (err) {
            console.log(err);
        }
    }

    _deleteTodo = async (e) => {
        e.preventDefault();
        try {
            let userId = this.props.match.params.userId;
            let listId = this.props.match.params.listId;
            let todoId = this.props.match.params.todoId;
            const res = await axios.delete(`/api/todo/${userId}/${listId}/${todoId}`);
        }
        catch (err) {
            console.log(err);
        }
    }

    render() {
        let userId = this.props.match.params.userId;
        let listId = this.props.match.params.listId;
        return (
            <div>
                <button onClick={this._deleteTodo}>Delete</button>
                <br />
                <div>Title: {this.state.todo.todoTitle}</div>
                <div>Description: {this.state.todo.todoDescription}</div>
                <div>Status: {this.state.todo.status ? "Complete" : "Incomplete"}</div>
                <Link to={`/user/${userId}/list/${listId}`}><button>Go back</button></Link>
            </div>
        );
    }
}

export default Todo;