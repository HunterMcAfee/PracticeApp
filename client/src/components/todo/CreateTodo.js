import React, { Component } from 'react';
import axios from 'axios';

class CreateTodo extends Component {
    constructor() {
        super();
        this.state = {
            todo: {
                status: false,
                todoTitle: "",
                todoDescription: ""
            }
        }
    }

    _createList = async (e) => {
        e.preventDefault();
        try {
            let payload = {payload: this.state.todo}
            let userId = this.props.match.params.userId;
            let listId = this.props.match.params.listId;
            const res = await axios.post(`/api/todo/${userId}/${listId}`, payload);
        }
        catch (err) {
            console.log(err);
        }
    }

    _handleChange = (e) => {
        let newState = {...this.state};
        newState.todo[e.target.name] = e.target.value;
        this.setState(newState);
    }

    render() {
        return (
            <div>
                <form>
                    <input onChange={this._handleChange} type="text" name="todoTitle" value={this.state.todo.todoTitle} />
                    <input onChange={this._handleChange} type="text" name="todoDescription" value={this.state.todo.todoDescription} />
                    <button onClick={this._createList}>Submit</button>
                </form>
            </div>
        );
    }
}

export default CreateTodo;