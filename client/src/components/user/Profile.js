import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class Profile extends Component {
    constructor() {
        super();
        this.state = {
            user: {}
        }
    }

    componentWillMount() {
        this._fetchUser();
    }

    _fetchUser = async () => {
        try {
            const res = await axios.get(`/api/user/${this.props.match.params.userId}`);
            console.log(res.data);
            this.setState({user: res.data})
        }
        catch (err) {
            console.log(err);
        }
    }

    render() {
        return (
            <div>
                <div>Your Profile:</div>
                <div>User Name: {this.state.user.userName}</div>
                <div>Email: {this.state.user.email}</div>
                <div>First Name: {this.state.user.firstName}</div>
                <div>Last Name: {this.state.user.lastName}</div>

                <Link to={`/user/${this.state.user._id}/lists`}><button>Go to your todo lists.</button></Link>
            </div>
        );
    }
}

export default Profile;