import React, {Component} from 'react';
import firebaseApp from "../config/firebase";
// import {Link} from "react-router-dom";
class Header extends Component {
    componentWillUnmount(){
        this.logout();
    }

    logout() {
        firebaseApp.auth().signOut();
    }

    render(){
        return (
            <div className="chat-header clearfix">
                <img src="https://nhanh.vn/images/logo/nhanh_black2.png" alt="avatar" />
                <div className="chat-about">
                    <div className="chat-with">Chat live <button onClick={this.logout}>(Đăng xuất)</button></div>
                    <div className="chat-num-messages">{localStorage.email}</div>
                </div>
            </div>
        );
    }
}

export default Header