import React, { Component } from 'react';
import axios from 'axios';

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

    render() {
        return (
            <div>
                <div>Title: {this.state.todo.todoTitle}</div>
                <div>Description: {this.state.todo.todoDescription}</div>
                <div>Status: {this.state.todo.status ? "Complete" : "Incomplete"}</div>
            </div>
        );
    }
}

export default Todo;