import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class Lists extends Component {
    constructor() {
        super();
        this.state = {
            lists: []
        }
    }

    componentWillMount() {
        this._fetchLists();
    }

    _fetchLists = async () => {
        try {
            const res = await axios.get(`/api/list/${this.props.match.params.userId}`);
            this.setState({lists: res.data});
        }
        catch (err) {
            console.log(err);
        }
    }

    render() {
        return (
            <div>
                <Link to={`/user/${this.props.match.params.userId}/createlist`}>
                                <button>Create List</button>
                </Link>

                {this.state.lists.map( (list, i) => {
                    return (
                        <div key={i}>

                            <div>Title: {list.listTitle}</div>
                            <div>Description: {list.listDescription}</div>

                            <Link to={`/user/${this.props.match.params.userId}/list/${list._id}`}>
                                <button>Go to</button>
                            </Link>

                        </div>
                    )
                })}
            </div>
        );
    }
}

export default Lists;