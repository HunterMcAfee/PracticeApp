import React, { Component } from 'react';
import axios from 'axios';

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
                {this.state.lists.map( (list, i) => {
                    return (
                        <div key={i}>
                            <div>Title: {list.listTitle}</div>
                            <div>Description: {list.listDescription}</div>
                        </div>
                    )
                })}
            </div>
        );
    }
}

export default Lists;