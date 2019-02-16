import React, {Component} from 'react';
import './Assets/Css/App.css';
import firebaseApp from "./config/firebase";
import Login from "./Login";
import App from "./App";
// import {BrowserRouter, Route, Redirect, Switch} from "react-router-dom";

class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            user: {}
        }
    }

    componentWillMount() {
        this.clear();
    }

    componentDidMount() {
        this.authListener();
    }

    clear() {
        this.setState({user: null});
        localStorage.removeItem('user');
    }

    authListener() {
        firebaseApp.auth().onAuthStateChanged((user) => {
            if (user) {
                this.setState({user});
                let $rs = JSON.stringify(user);
                $rs = JSON.parse($rs);
                localStorage.setItem('userid', user.uid);
                localStorage.setItem('email', user.email);
                localStorage.setItem('chatNhanhAuthenToken', $rs.stsTokenManager.accessToken);
            } else {
                this.setState({user: null});
                localStorage.removeItem('user');
            }
        });
    }

    render() {
        // return (
        //     <BrowserRouter>
        //         <Switch>
        //             <Route path="/" exact render={() => (
        //                 this.state.user ? (<App/>) : (<Redirect to="/login"/>)
        //             )}/>
        //             <Route path="/login" exact render={() => (
        //                 this.state.user ? (<Redirect to="/"/>) : (<Login/>)
        //             )}/>
        //         </Switch>
        //     </BrowserRouter>
        // );
        return (
            <div>
                {this.state.user ? (<App/>) : (<Login/>)}
            </div>
        );
    }
}

export default Home;