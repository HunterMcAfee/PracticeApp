import React, { Component } from 'react';

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
                </form>
            </div>
        );
    }
}

export default CreateList;