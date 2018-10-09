import React, {Component} from 'react';
// import logo from './logo.svg';
import './App.css';
import {firebaseApp} from "./config/firebase";

import MessageList from './components/MessageList';
import Header from './components/Header';
import MessageBox from './components/MessageBox';


class App extends Component {
    render() {
        return (
            <div>
                <div className="nChat">
                    <div className="chat_header">
                        <Header/>
                    </div>
                    <div className="chat_body">
                        <div className="box_chat">
                            <MessageList db={firebaseApp} />
                        </div>
                    </div>
                    <div className="chat_footer">
                        <MessageBox db={firebaseApp} />
                    </div>
                </div>
            </div>
        );
    }
}
export default App;
