import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class List extends Component {
    constructor() {
        super();
        this.state = {
            list: {
                todos: []
            }
        }
    }

    componentWillMount() {
        this._fetchList();
    }

    _fetchList = async () => {
        try {
            const res = await axios.get(`/api/list/${this.props.match.params.userId}/${this.props.match.params.listId}`);
            this.setState({list: res.data});
        }
        catch (err) {
            console.log(err);
        }
    }

    render() {
        const userId = this.props.match.params.userId;
        const listId = this.props.match.params.listId;

        return (
            <div>
                <div>Title: {this.state.list.listTitle}</div>
                <div>Description: {this.state.list.listDescription}</div>
                <br />
                {this.state.list.todos.map( (todo, i) => {
                    return (
                        <div key={i}>
                            <div>Title: {todo.todoTitle}</div>
                            <div>Description: {todo.todoDescription}</div>
                            <Link to={`/user/${userId}/list/${listId}/todo/${todo._id}`}><button>Go to</button></Link>
                        </div>
                    )
                })}
            </div>
        );
    }
}

export default List;