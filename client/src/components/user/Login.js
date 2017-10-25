import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class Login extends Component {
    constructor() {
        super();
        this.state = {
            users: []
        }
    }

    componentWillMount() {
        this._fetchUsers();
    }

    _fetchUsers = async () => {
        try {
            const res = await axios.get(`/api/user`);
            this.setState({users: res.data})
        }
        catch (err) {
            console.log(err);
        }
    }
   
    render() {
        return (
            <div>
                <div>Do It</div>
                {this.state.users.map( (user, i) => {
                    return (
                        <div key={i}>
                            <div>{user.userName}</div>
                            <Link to={`/user/${user._id}`}><button>Login</button></Link>
                        </div>
                    )
                })}
            </div>
        );
    }
}

export default Login;