import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class CreateList extends Component {
    constructor() {
        super();
        this.state = {
            payload: {
                listTitle: "",
                listDescription: ""
            }
        }
    }

    _handleChange = (e) => {
        e.preventDefault();
        let newState = {...this.state}
        newState.payload[e.target.name] = e.target.value
        this.setState(newState);
    }

    _createList = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post(`/api/list/${this.props.match.params.userId}`, this.state.payload);
        } 
        catch (res) {
            console.log(res);
        }
    }

    render() {
        return (
            <div>
                <form>
                    <input type="text" 
                        onChange={this._handleChange} 
                        name="listTitle" 
                        value={this.state.payload.listTitle} 
                    />
                    <input type="text" 
                        onChange={this._handleChange} 
                        name="listDescription" 
                        value={this.state.payload.listDescription}
                    />
                    <button onClick={this._createList}>Submit</button>
                </form>

                <br />

                <Link to={`/user/${this.props.match.params.userId}/lists`}>
                                <button>Go Back</button>
                </Link>
            </div>
        );
    }
}

export default CreateList;