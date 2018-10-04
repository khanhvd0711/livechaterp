import React, {Component} from 'react';
// import logo from './logo.svg';
import './App.css';
import firebase from 'firebase';
import MessageList from './components/MessageList';
import Header from './components/Header';
import MessageBox from './components/MessageBox';


class App extends Component {
    constructor(props) {
        super(props);
        // Initialize Firebase
        var config = {
            apiKey: "AIzaSyD4pmMmxNFHmhQqFWp5MKEKaiJMDyx80r4",
            authDomain: "live-chat-12bab.firebaseapp.com",
            databaseURL: "https://live-chat-12bab.firebaseio.com",
            projectId: "live-chat-12bab",
            storageBucket: "",
            messagingSenderId: "641599993586"
        };
        firebase.initializeApp(config);
    }

    render() {
        return (
            <div>
                <div className="nChat">
                    <div className="chat_header">
                        <Header/>
                    </div>
                    <div className="chat_body">
                        <div className="box_chat">
                            <MessageList db={firebase} />
                        </div>
                    </div>
                    <div className="chat_footer">
                        <MessageBox db={firebase} />
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
