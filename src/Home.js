import React, {Component} from 'react';
// import logo from './logo.svg';
import './App.css';
import firebaseApp from "./config/firebase";
import Login from "./Login";
import App from "./App";

class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            user: {}
        }
    }

    componentDidMount() {
        this.authListener();
    }

    authListener() {
        firebaseApp.auth().onAuthStateChanged((user) => {
            if (user) {
                this.setState({ user });
                localStorage.setItem('user', user.uid);
            } else {
                this.setState({ user: null });
                localStorage.removeItem('user');
            }
        });
    }

    render() {
        return (
            <div>
                {this.state.user ? (<App/>) : (<Login/>)}
            </div>
        );
    }
}

export default Home;